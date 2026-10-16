import { defineConfig } from 'astro/config';

// Static site. Pages build to /contact.html etc.; Netlify serves them at /contact.
export default defineConfig({
  site: 'https://lvgwildlife.com',
  build: { format: 'file' },
  trailingSlash: 'never',
});
