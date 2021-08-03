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
  fastRefresh: {},
  title: 'HDM',
  favicon: '/favicon.ico',
})
