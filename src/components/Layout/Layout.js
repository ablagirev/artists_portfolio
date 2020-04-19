import React from 'react'
import styled from 'styled-components'

import { Header } from '../Header'
import { Footer } from '../Footer'
import { Loader } from '../../ui-kit'
import { useSelector } from 'react-redux'

export const Layout = ({ children }) => {
  const mapState = useSelector(state => ({
    isFetched: !(state.header.fetching && state.footer.fetching)
  }))
  const { isFetched } = mapState

  return (
    <LayoutWrapper>
      <Header />
      <Content>{isFetched ? children : <Loader />}</Content>
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
