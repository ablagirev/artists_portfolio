export const getRules = () => {
  const serviceName = process.env.SERVICE_NAME
  const pathRewrite = serviceName ? `^/${serviceName}/api.+?/` : '^/api.+?/'

  return {
    router: {
      '/api-ump': process.env.UMP_SERVICES_HTTP_URL,
      '/api-loan': 'http://site2-app-test01.mbrd.ru'
    },
    pathRewrite: {
      [pathRewrite]: ''
    },
    logLevel: 'info'
  }
}
