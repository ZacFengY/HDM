export default {
  title: 'HDM',
  favicon: '/favicon.ico',
  manifest: {
    fileName: 'manifest.json',
  },
  targets: {
    ie: 11,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  externals: {
    dac: 'window.dssAuthClient',
  },
  fastRefresh: {},
  dynamicImport: {},
  chainWebpack(config) {
    config.optimization.splitChunks({
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|less)$/,
          chunks: 'async',
          minChunks: 1,
          minSize: 0,
        },
      },
    })
  },
}
