import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

const isNetlifyBuild = process.env.NETLIFY === 'true' || Boolean(process.env.CONTEXT); export default defineConfig({
  site: 'https://patrickalexander-dev.netlify.app',
  ...(isNetlifyBuild ? { adapter: netlify() } : {}),  vite: { cacheDir: './.vite-cache' },
});