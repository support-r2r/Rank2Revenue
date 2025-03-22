import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'agencex-astro.vercel.app',
        port: '',
        pathname: '/**',
      },
      
      {
        protocol: 'https',
        hostname: 'rank2revenue.com.au', // Updated hostname for Rank2Revenue
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com', // For Imgur Images
        port: '',
        pathname: '/**',
      },
      
      
    ],
  },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots', // Map /robots.txt to the API route
      },
    ];
  },
};

export default nextConfig;
