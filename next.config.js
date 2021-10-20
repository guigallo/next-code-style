const withTM = require('next-transpile-modules')([])
const { i18n } = require('./next-i18next.config')

module.exports = withTM({
  reactStrictMode: true,
  redirects: async () => [
    // { permanent: true, source: '/home', destination: '/' },
  ],
  i18n,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }
    return config
  },
})
