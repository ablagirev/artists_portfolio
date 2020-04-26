import { loadConfig } from './app-config-loader'

export const loadEnvKeys = (req, res, next) => {
  loadConfig()
    .then(data => {
      process.env = { ...process.env, ...data }
    })
    .catch(error => {
      // todo добавить страницу об ошибке (требуется глобально для всех приложений) в зависимости от статуса ответа
      res.status(400).send(error)
    })
  next()
}
