import React from 'react'
import styled from 'styled-components'

import { Header } from '../Header'
import { Footer } from '../Footer'

export const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const Content = styled.div`
  flex: 1 0 auto;
`
