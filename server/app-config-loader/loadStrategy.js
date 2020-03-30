import consul from 'consul'

const loadConsul = (key, value) => {
  const { path } = value

  if (!path) {
    // todo добавить страницу (собственные обработчики ошибок) об ошибке (требуется глобально для всех приложений) в зависимости от статуса ответа
    throw new Error('Check app.config.yaml')
  }

  const [host, port] = process.env.consul_host.split(':')
  const token = process.env.consul_config_acl_token || ''

  const consulConfig = {
    host,
    port,
    defaults: {
      token
    },
    promisify: true
  }

  const instance = consul(consulConfig)

  return path.reduce((result, pathItem) => {
    return result.then(combinedData => {
      return instance.kv
        .get({ key: pathItem, recurse: true })
        .then(data => {
          let store = {}

          data.forEach(item => {
            const { Key, Value } = item
            if (Value) {
              const shortKey = Key.split('/').pop()
              store = { ...store, [shortKey]: Value }
            }
          })

          return { ...combinedData, ...store }
        })
        .catch(error => {
          throw error
        })
    })
  }, Promise.resolve({}))
}

const loadLocal = (key, value) => {
  const { keys } = value

  if (!keys) {
    // todo добавить страницу (собственные обработчики ошибок) об ошибке (требуется глобально для всех приложений) в зависимости от статуса ответа
    throw new Error('Check app.config.yaml')
  }

  return Promise.resolve(keys)
}

const loadDefault = (key, value) => {
  return Promise.resolve({ [key]: value })
}

export { loadConsul, loadLocal, loadDefault }
