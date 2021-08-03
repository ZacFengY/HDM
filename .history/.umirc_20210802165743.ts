import { defineConfig } from 'umi'

export default defineConfig({
  targets: {
    ie: 11,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  disableCSSModules: true,
  dynamicImport: {},

  fastRefresh: {},
  title: 'HDM',
  favicon: '/favicon.ico',
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
