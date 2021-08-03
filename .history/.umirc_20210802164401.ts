import { defineConfig } from 'umi'

export default defineConfig({
  treeShaking: true,
  targets: {
    ie: 11,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  title: 'HDM',
  favicon: '/favicon.ico',
})
