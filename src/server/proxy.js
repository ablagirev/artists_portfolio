import proxy from 'http-proxy-middleware'

import { locationRules } from './proxy.routes.config'

export const useProxy = (app, env) => {
  const baseConfig = {
    target: '/',
    changeOrigin: true,
    logLevel: 'debug'
  }

  const config = { ...baseConfig, ...locationRules }

  app.use('/api**', proxy(config))
}
