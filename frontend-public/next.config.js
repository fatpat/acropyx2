const path = require('path')

module.exports = {
  trailingSlash: false,
  reactStrictMode: false,
  experimental: {
    largePageDataBytes: 256000,
    esmExternals: false
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  }
}
