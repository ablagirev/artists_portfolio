import * as React from 'react'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { StoreContext } from 'redux-react-hook'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import { IntlProvider, addLocaleData } from 'react-intl'
import { Normalize } from 'styled-normalize'

import { App } from 'client/App'

const theme = {}
export const ServerRoot = ({ location, sheet, store, context }) => {
  return (
    <StoreContext.Provider value={store}>
      <Provider store={store}>
        <StyleSheetManager sheet={sheet}>
          <ThemeProvider theme={theme}>
            <StaticRouter location={location} context={context}>
              <Normalize />
              <App />
            </StaticRouter>
          </ThemeProvider>
        </StyleSheetManager>
      </Provider>
    </StoreContext.Provider>
  )
}
