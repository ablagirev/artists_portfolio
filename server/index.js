import path from 'path'

import express from 'express'

import { useProxy } from './proxy'
import { loadEnvKeys } from './envLoader'

const serviceName = process.env.SERVICE_NAME ? process.env.SERVICE_NAME : ''
const rootPath = process.env.NODE_PATH
const proxyPath = serviceName ? `/${serviceName}/api*` : '/api*'

const staticBuild = `${rootPath}/build`
const staticPublic = `${rootPath}/public`
const htmlFile = `${rootPath}/public/index.html`

const app = express()

app.use(loadEnvKeys)

app.use(`/${serviceName}`, express.static(staticBuild))
app.use(`/${serviceName}`, express.static(staticPublic))

app.use(proxyPath, useProxy)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(htmlFile))
})

app.listen(8080)
