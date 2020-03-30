import proxy from 'http-proxy-middleware'

import { getRules } from './rules'

export const useProxy = (req, resp) => {
  const baseConfig = {
    target: '/',
    changeOrigin: true,
    logLevel: 'debug'
  }

  const locationRules = getRules()
  const config = { ...baseConfig, ...locationRules }
  const initProxy = proxy(config)

  initProxy(req, resp)
}
