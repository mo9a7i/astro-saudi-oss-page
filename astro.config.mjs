import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://mo9a7i.github.io',
  base: '/astro-saudi-oss-page',
  integrations: [tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp',
  })]
});