/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/registro",
        destination: "https://app.mentorsalud.com",
        permanent: true,
      },
      {
        source: "/registro/:path*",
        destination: "https://app.mentorsalud.com",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
