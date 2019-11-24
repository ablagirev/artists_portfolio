import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import root from 'window-or-global'
import { IntlProvider, addLocaleData } from 'react-intl'
import { StoreContext } from 'redux-react-hook'
// import WebFont from 'webfontloader'

import { App } from './App'
import { configureStore, history } from './store'

// require('assets/favicons/favicon-32x32.png')
// require('assets/favicons/favicon-16x16.png')
// require('assets/favicons/favicon.ico')
// require('assets/fonts/MTSSans-Medium__W.woff2')
// require('assets/fonts/MTSSans-Regular__W.woff2')
// require('assets/fonts/MTSSans-Bold__W.woff2')

// const dataAttrib = +process.env.IS_SSR
//   ? root.document.getElementById('redux_initial_state').getAttribute('data-json')
//   : null
// const initialData = +process.env.IS_SSR ? JSON.parse(decodeURIComponent(dataAttrib)) : null

export const store = configureStore({})

export const Root = () => (
  <StoreContext.Provider value={store}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </StoreContext.Provider>
)
