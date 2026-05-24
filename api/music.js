import { getAuthorMeta } from '../lib/authors.js';

export default async function handler(req, res) {
  const { author } = req.query;

  if (!author) return res.status(400).json({ error: 'Missing author' });

  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'ElevenLabs API key not configured' });

  const { music: prompt } = getAuthorMeta(decodeURIComponent(author));

  const eleven = await fetch('https://api.elevenlabs.io/v1/sound-generation', {
    method: 'POST',
    headers: {
      'xi-api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: prompt,
      duration_seconds: 20,
      prompt_influence: 0.4,
    }),
  });

  if (!eleven.ok) {
    const err = await eleven.text();
    console.error('ElevenLabs sound-gen error:', eleven.status, err);
    return res.status(502).json({ error: 'Music generation failed', status: eleven.status });
  }

  const audioBuffer = await eleven.arrayBuffer();

  // Vercel CDN caches by author slug — same author = served from cache
  res.setHeader('Content-Type', 'audio/mpeg');
  res.setHeader('Cache-Control', 'public, s-maxage=2592000, stale-while-revalidate=604800');
  res.send(Buffer.from(audioBuffer));
}
