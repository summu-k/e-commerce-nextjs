const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js',
  },
  images: {
    domains: ['rickandmortyapi.com', 'upload.wikimedia.org', 'images.unsplash.com'],
  },
});
