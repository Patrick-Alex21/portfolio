import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://Patrick-Portfolio-Dev.netlify.app',
  adapter: netlify(),
});