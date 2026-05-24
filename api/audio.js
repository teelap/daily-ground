import { getAuthorMeta } from '../lib/authors.js';

// Insert ElevenLabs <break> tags to slow the delivery and make it feel
// like someone thinking aloud — pauses at commas, dashes, and sentence ends.
function phrasify(raw) {
  return raw
    // em-dash or double-dash → longer breath
    .replace(/\s*[—–]\s*/g, '<break time="0.7s" /> ')
    // comma → small pause
    .replace(/,\s*/g, ',<break time="0.35s" /> ')
    // semicolon → medium pause
    .replace(/;\s*/g, ';<break time="0.55s" /> ')
    // mid-text ellipsis → contemplative pause
    .replace(/\.\.\./g, '<break time="0.8s" />')
    // sentence-ending period that is NOT the last character (i.e. mid-text)
    .replace(/\.(\s+)(?=[A-Z])/g, '.<break time="0.6s" />$1')
    // colon → brief pause before the reveal
    .replace(/:\s*/g, ':<break time="0.45s" /> ');
}

// Fetch voices available on this account, pick best match for gender
async function pickVoice(apiKey, gender) {
  const res = await fetch('https://api.elevenlabs.io/v1/voices', {
    headers: { 'xi-api-key': apiKey },
  });
  if (!res.ok) return null;

  const { voices = [] } = await res.json();

  // 'premade' = ElevenLabs default voices (free tier OK)
  // 'cloned'  = user-created voices (free tier OK)
  // 'generated' / 'professional' = voice library (paid only)
  const allowed = voices.filter(v =>
    v.category === 'premade' || v.category === 'cloned'
  );

  const preferred = gender === 'f' ? 'female' : 'male';
  const opposite  = gender === 'f' ? 'male'   : 'female';

  const match =
    allowed.find(v => (v.labels?.gender || '').toLowerCase() === preferred) ||
    allowed.find(v => (v.labels?.gender || '').toLowerCase() === opposite)  ||
    allowed[0];

  return match?.voice_id || null;
}

export default async function handler(req, res) {
  const { index, text, author } = req.query;

  if (!text || index === undefined) {
    return res.status(400).json({ error: 'Missing index or text' });
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'ElevenLabs API key not configured' });

  const { gender } = getAuthorMeta(author || '');
  const voiceId = await pickVoice(apiKey, gender);

  if (!voiceId) {
    return res.status(502).json({ error: 'No usable ElevenLabs voices found on this account' });
  }

  const eleven = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: 'POST',
    headers: {
      'xi-api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: phrasify(decodeURIComponent(text)),
      model_id: 'eleven_multilingual_v2',
      voice_settings: {
        stability: 0.45,        // more variation = feels like it's discovering the words
        similarity_boost: 0.75,
        style: 0.40,            // expressive, unhurried
        use_speaker_boost: true,
        speed: 0.82,            // deliberate, not slow — thoughtful
      },
    }),
  });

  if (!eleven.ok) {
    const err = await eleven.text();
    console.error('ElevenLabs TTS error:', eleven.status, err);
    return res.status(502).json({ error: 'TTS generation failed', status: eleven.status });
  }

  const audioBuffer = await eleven.arrayBuffer();

  res.setHeader('Content-Type', 'audio/mpeg');
  res.setHeader('Cache-Control', 'public, s-maxage=2592000, stale-while-revalidate=604800');
  res.send(Buffer.from(audioBuffer));
}
