/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: "anonymous",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**"
      }
    ],
  },
  async rewrites() {
    return [
      {
        source: '/github.com/:path*',
        destination: 'https://github.com/:path*',
      },
    ]
  }
}

module.exports = nextConfig
