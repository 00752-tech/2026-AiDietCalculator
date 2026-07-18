/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/recommend/catalyst',
        destination: 'https://2d52bx1-e7dsfx08pm6q66yqyz.hop.clickbank.net/?&traffic_source=aidietcalc',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
