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
        destination: 'https://e1b52tfuj27vdm9fn420llp3ar.hop.clickbank.net/?&traffic_source=aidietcalc',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
