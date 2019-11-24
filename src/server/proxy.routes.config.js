export const locationRules = {
  router: {
    '/api-ump': 'http://services-ump2-dev.mbrd.ru:8090',
    '/api-loan': 'http://site2-app-test01.mbrd.ru'
  },
  pathRewrite: {
    '^/api.+?/': ''
  }
}
