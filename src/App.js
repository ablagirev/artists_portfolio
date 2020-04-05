import { hot } from 'react-hot-loader/root'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { GlobalStyles } from './styles/global'

import { theme } from './theme'
import { Routes } from './routes'

export const App = hot(() => (
  <ThemeProvider theme={theme}>
    <>
      <Normalize />
      <GlobalStyles />
      <Routes />
    </>
  </ThemeProvider>
))