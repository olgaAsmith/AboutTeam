/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nextjs-github-pages',
  images: {
    domains: ['reqres.in'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/account123/**'
      }
    ]
  }
};

export default nextConfig;
