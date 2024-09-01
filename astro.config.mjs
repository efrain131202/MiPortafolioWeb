import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://efraincruzlobato.netlify.app', 
  integrations: [tailwind()],
});
