import { defineConfig } from 'umi'

export default defineConfig({
  targets: {
    ie: 11,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  "disableCSSModules": true
  fastRefresh: {},
  title: 'HDM',
  favicon: '/favicon.ico',
})
