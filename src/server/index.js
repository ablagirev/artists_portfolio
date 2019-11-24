import path from 'path'

import express from 'express'
import consul from 'consul'

import { useProxy } from './proxy'

const consulObj = consul({
  host: 'consul-ump-dev.mbrd.ru',
  port: 8081,
  defaults: {
    token: '714f6297-1977-cd94-4b69-c437239d64ae'
  }
})

console.log(consulObj.kv.get('ump/portal-frontend/application/UMP_SERVICES_HTTP_URL', (err, result) => {
console.log(err, result)
}))

const baseDir = process.env.NODE_PATH
const app = express()

app.use('/build', express.static(`${baseDir}/build`)) //serves the index.html

useProxy(app)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + './../../index.html'))
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
