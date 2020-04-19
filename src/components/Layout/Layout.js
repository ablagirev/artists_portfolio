import React from 'react'
import styled from 'styled-components'
import { Footer } from '../Footer'
import { Header } from '../Header'

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
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const Content = styled.div`
  flex: 1 0 auto;
  display: flex;
  position: relative;
  flex-direction: column;
`
