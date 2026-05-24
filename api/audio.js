import { getAuthorMeta } from '../lib/authors.js';

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
      text: decodeURIComponent(text),
      model_id: 'eleven_multilingual_v2',
      voice_settings: {
        stability: 0.60,
        similarity_boost: 0.80,
        style: 0.15,
        use_speaker_boost: true,
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
