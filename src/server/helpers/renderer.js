import * as React from 'react'
import { renderToString } from 'react-dom/server'
import Helmet from 'react-helmet'
import { ServerStyleSheet } from 'styled-components'
import asyncHandler from 'express-async-handler'
import uniqid from 'uniqid'

import { renderHTML } from '../templates/renderHTML'
import { render500 } from '../templates/render500'
import { ServerRoot } from '../templates/ServerRoot'
import { renderDesktop } from '../templates/renderDesktop'

import { ssrCreateSignStore, ssrCreateApplicationStore, ssrCreatePAStore } from './store'

import { commonActions } from 'src/client/features/common/reducer'

const IS_PROD = process.env.NODE_ENV === 'production'
const IS_SSR = !!+process.env.IS_SSR
const buildId = `webpack_build_${uniqid()}`
const context = {}
export const baseApiUri = IS_PROD ? process.env.BASE_API : process.env.DEV_BASE_API

export const renderer = asyncHandler(async (req, res) => {
  if (IS_SSR) {
    try {
      if (req.useragent.isDesktop) {
        throw new Error('desktop')
      }
      const sheet = new ServerStyleSheet()
      const clientStage = req.url.split('/')[1] // что-то что идентифицирует стадию кредита: анкета, подпись, платежный адаптер
      let store
      //префетчим стор для разных стадий
      switch (clientStage) {
        case 'sign': {
          store = await ssrCreateSignStore(req)
          break
        }
        case 'application': {
          store = await ssrCreateApplicationStore(req)
          break
        }
        case 'paymentAdapter': {
          store = await ssrCreatePAStore(req)
          console.log(store)
          break
        }
      }
      const rootFirstRender = (
        <ServerRoot location={req.url} sheet={sheet.instance} store={store} context={context} />
      )
      renderToString(rootFirstRender) // wastefull render for ssr to work

      // and wait for redux-logic to finish
      await store.logicMiddleware.whenComplete(async () => {
        const ip = req.connection.remoteAddress || req.socket.remoteAddress
        await store.dispatch(commonActions.firstRenderPassed(true))
        await store.dispatch(commonActions.setIp(ip.replace(/^.*:/, '')))
        const storeState = store.getState()
        const preloadedState = encodeURIComponent(JSON.stringify(storeState))
        const root = (
          <ServerRoot location={req.url} sheet={sheet.instance} store={store} context={context} />
        )

        const html = renderToString(root)
        const styleTags = sheet.getStyleTags()
        const helmetContent = Helmet.renderStatic()
        const meta = `
        ${helmetContent.meta.toString()}
        ${helmetContent.title.toString()}
        ${helmetContent.link.toString()}
      `.trim()
        res.setHeader('Location', req.url)
        res.status(200).send(
          renderHTML({
            html,
            styleTags,
            preloadedState,
            meta,
            baseApiUri,
            buildId
          })
        )
      })
    } catch (error) {
      console.log(error)
      // eslint-disable-next-line no-console
      error.message === 'desktop'
        ? res.status(500).send(renderDesktop({ error, buildId }))
        : res.status(500).send(render500({ error, buildId }))
    }
  } else {
    try {
      res.status(200).send(renderHTML({ baseApiUri, buildId }))
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error)
      res.status(500).send(render500({ error, buildId }))
    }
  }
})
