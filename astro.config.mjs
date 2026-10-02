import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

const isNetlifyBuild =
  process.env.NETLIFY === 'true' || Boolean(process.env.CONTEXT);

export default defineConfig({
  site: 'https://patrick-alexander.dev',
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
  ...(isNetlifyBuild ? { adapter: netlify() } : {}),
  fonts: [
    { provider: fontProviders.google(), name: 'Bebas Neue', cssVariable: '--font-display', fallbacks: ['sans-serif'] },
    { provider: fontProviders.google(), name: 'Syne', cssVariable: '--font-body', weights: ['400 800'], fallbacks: ['sans-serif'] },
    { provider: fontProviders.google(), name: 'JetBrains Mono', cssVariable: '--font-mono', weights: ['300 500'], fallbacks: ['monospace'] },
  ],
  vite: {
    cacheDir: './.vite-cache',
  },

  redirects: {
    'https://netlify.app': 'https://patrick-alexander.dev',
    'https://netlify.app/[...path]': 'https://patrick-alexander.dev/[...path]',
  }
});