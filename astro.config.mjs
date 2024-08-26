import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';


export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [tailwind(), react()],
});