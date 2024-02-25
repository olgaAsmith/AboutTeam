/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  images: {
    domains: ['reqres.in'],
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
