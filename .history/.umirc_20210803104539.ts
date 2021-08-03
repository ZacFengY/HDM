import { defineConfig } from 'umi'

export default defineConfig({
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
