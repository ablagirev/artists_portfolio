import React from 'react'
import styled from 'styled-components'
import { Footer } from '../Footer'
import { Header } from '../Header'
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
      {isFetched ? (
        <Content>{children}</Content>
      ) : (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      <Footer />
    </LayoutWrapper>
  )
}

const LoaderWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

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
