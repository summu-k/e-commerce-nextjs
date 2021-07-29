const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    scope: '/',
    runtimeCaching,
    mode: 'production',
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ['rickandmortyapi.com', 'upload.wikimedia.org', 'images.unsplash.com'],
  },
});
