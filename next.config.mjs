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
        source: "/go/gluco6",
        destination:
          "https://0fe1au6se6bldvc1xldnlo8r7r.hop.clickbank.net/?&traffic_source=ai_calc",
        permanent: false,
      },
    ]
  },
}

export default nextConfig