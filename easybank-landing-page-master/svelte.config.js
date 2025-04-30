import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      // Set the base path to the subfolder
      base: dev ? '' : '/easybank-landing-page-master'
    },
    prerender: {
      default: true
    }
  },
  preprocess: vitePreprocess(),
};

