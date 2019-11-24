import path from 'path'

import streamify from 'stream-array'
import express from 'express'
import compression from 'compression'
import proxy from 'http-proxy-middleware'
import useragent from 'express-useragent'

import { renderer } from '../helpers/renderer'

const IS_PROD = process.env.NODE_ENV === 'production'
const API_URL = process.env.NODE === 'production' ? process.env.BASE_API : process.env.DEV_BASE_API
const SUGGESTIONS_API = process.env.SUGGESTIONS_API
const SUGGESTIONS_TOKEN = process.env.SUGGESTIONS_TOKEN

export const routes = app => {
  IS_PROD && app.use(compression())

  app.use(useragent.express())

  app.use(express.static(path.resolve(__dirname, '../../../build')))

  app.use('*/fonts', express.static(path.resolve(__dirname, '../../client/assets/fonts')))
  app.use('*/img', express.static(path.resolve(__dirname, '../../client/assets/img')))

  app.use('/', express.static(path.join(__dirname, '../../../index.html')))
  app.use(
    '*/suggestions/*',
    proxy({
      target: SUGGESTIONS_API,
      changeOrigin: true,
      secure: true,
      pathRewrite: function(path, req) {
        return path.replace(/^.+suggestions/, 'suggestions')
      },
      headers: {
        Connection: 'keep-alive',
        ContentType: 'application/json',
        Accept: 'application/json',
        Authorization: `Token ${SUGGESTIONS_TOKEN}`
      }
    })
  )
  app.use(
    '*/api/',
    proxy({
      target: API_URL,
      changeOrigin: true,
      secure: false,
      pathRewrite: function(path, req) {
        return path.replace(/^.+api/, '')
      }
    })
  )

  app.get(/^[^.]+$/, renderer, app)
}
