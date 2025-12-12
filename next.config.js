/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Disable legacy browser support
  experimental: {
    legacyBrowsers: false,
  },

  // Use modern JS
  swcMinify: true,
};

module.exports = nextConfig;