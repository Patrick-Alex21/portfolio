import sharp from 'sharp';
import fs from 'fs';
fs.mkdirSync('public/projects/thumbs', { recursive: true });
for (const f of fs.readdirSync('public/projects').filter(f => f.endsWith('-1.webp')))
  await sharp(`public/projects/${f}`).resize(870, 488, { fit: 'cover' }).webp({ quality: 75 }).toFile(`public/projects/thumbs/${f}`);