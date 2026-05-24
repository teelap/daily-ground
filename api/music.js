import { put, head } from '@vercel/blob';
import { getAuthorMeta } from '../lib/authors.js';

export default async function handler(req, res) {
  const { author } = req.query;

  if (!author) return res.status(400).json({ error: 'Missing author' });

  const slug = author.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  const cacheKey = `music/${slug}.mp3`;

  // Check blob cache first
  try {
    const existing = await head(cacheKey, { token: process.env.BLOB_READ_WRITE_TOKEN });
    if (existing?.url) {
      return res.status(200).json({ url: existing.url, cached: true });
    }
  } catch (_) {
    // Not cached yet — generate it
  }

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
    return res.status(502).json({ error: 'ElevenLabs sound generation failed', detail: err });
  }

  const audioBuffer = await eleven.arrayBuffer();

  const blob = await put(cacheKey, Buffer.from(audioBuffer), {
    access: 'public',
    contentType: 'audio/mpeg',
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  res.status(200).json({ url: blob.url, cached: false });
}
