module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/medical-term-app/:path*',
        destination: '/medical-term-app/:path*' // This matches static files served from the public directory
      }
    ]
  }
}
