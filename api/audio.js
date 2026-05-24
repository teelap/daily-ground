import { getAuthorMeta } from '../lib/authors.js';

export default async function handler(req, res) {
  const { index, text, author } = req.query;

  if (!text || index === undefined) {
    return res.status(400).json({ error: 'Missing index or text' });
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'ElevenLabs API key not configured' });

  const { voiceId } = getAuthorMeta(author || '');

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

  // Vercel CDN caches this at the edge — same quote index = served from cache forever
  res.setHeader('Content-Type', 'audio/mpeg');
  res.setHeader('Cache-Control', 'public, s-maxage=2592000, stale-while-revalidate=604800');
  res.send(Buffer.from(audioBuffer));
}
