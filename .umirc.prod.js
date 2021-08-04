import { defineConfig } from 'umi'
import baseUmiConfig from './baseConfig.js'

export default defineConfig({
  ...baseUmiConfig,
  scripts: [{ src: '/dss-auth-client.js' }, { src: '/loginVerification.js' }],
})
