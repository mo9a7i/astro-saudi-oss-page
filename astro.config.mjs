import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://mo9a7i.github.io',
  base: '/astro-saudi-oss-page',
  integrations: [tailwind()]
});