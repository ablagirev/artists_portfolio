import React from 'react'
import { ThemeProvider } from 'styled-components'
import { hot } from 'react-hot-loader/root'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'

import { configureStore, history } from './store'
import { RoutesConfig as Routes } from './routes/config'
import { GlobalStyles } from './styles/global'
import { theme } from './theme'

const store = configureStore()

export const App = hot(() => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
})
