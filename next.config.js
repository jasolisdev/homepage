module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/medical-term/:path*',
        destination: '/medical-term/:path*' // This matches static files served from the public directory
      }
    ]
  }
}
