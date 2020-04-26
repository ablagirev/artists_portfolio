import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'

import { loadConsul, loadLocal, loadDefault } from './loadStrategy'

const CONFIG_TYPE_CONSUL = 'consul'
const CONFIG_TYPE_LOCAL = 'local'
const CONFIG_TYPE_DEFAULT = 'default'

export const loaderMapping = {
  [CONFIG_TYPE_CONSUL]: loadConsul,
  [CONFIG_TYPE_LOCAL]: loadLocal,
  [CONFIG_TYPE_DEFAULT]: loadDefault
}

export const loadConfig = () => {
  try {
    const rootPath = process.env.NODE_PATH
    const configPath = path.resolve(`${rootPath}/app.config.yaml`)
    const appConfig = yaml.safeLoad(fs.readFileSync(configPath, 'utf8'))

    return Object.keys(appConfig).reduce((result, key) => {
      return result.then(combinedData => {
        const loadStrategy = loaderMapping[key]
          ? loaderMapping[key](key, appConfig[key])
          : loaderMapping[CONFIG_TYPE_DEFAULT](key, appConfig[key])

        return loadStrategy
          .then(data => {
            return { ...combinedData, ...data }
          })
          .catch(error => {
            throw error
          })
      })
    }, Promise.resolve({}))
  } catch (error) {
    // todo добавить страницу (собственные обработчики ошибок) об ошибке (требуется глобально для всех приложений) в зависимости от статуса ответа
    throw new Error(`${error}\n Check app.config.yaml`)
  }
}
