import { defineConfig } from 'umi'

export default defineConfig({
  title: 'HDM',
  favicon: '/favicon.ico',
  targets: {
    ie: 11,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  cssLoader: {

    disableCSSModules: true,
  }
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
})
