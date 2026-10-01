import sharp from 'sharp';
import fs from 'fs';
fs.mkdirSync('public/projects/thumbs', { recursive: true });
for (const f of fs.readdirSync('public/projects').filter(f => f.endsWith('-1.webp')))
  await sharp(`public/projects/${f}`).resize(870, 488, { fit: 'cover' }).webp({ quality: 75 }).toFile(`public/projects/thumbs/${f}`);
  await sharp('public/PhotoCut.webp').resize(640).webp({ quality: 72 }).toFile('public/PhotoCut-sm.webp');
  await sharp('public/Thumbnail.webp').resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 80 }).toFile('public/Thumbnail.jpg');