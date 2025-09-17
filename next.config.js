const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // active le mode strict pour React
  swcMinify: true,       // minification plus rapide avec SWC

  // Configuration Sass
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  // Configuration des images distantes autorisées
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },

  // Optionnel : ajouter des headers de sécurité
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },

  // Si tu utilises TypeScript ou ESLint
  eslint: {
    ignoreDuringBuilds: true, // pour éviter d’interrompre la build
  },
};

module.exports = nextConfig;
