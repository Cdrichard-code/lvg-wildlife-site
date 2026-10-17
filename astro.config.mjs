import { defineConfig } from 'astro/config';

// Static site. Pages build to /contact.html etc.; Netlify serves them at /contact.
export default defineConfig({
  site: 'https://lvgwildlifesolutions.com',
  build: { format: 'file' },
  trailingSlash: 'never',
});
