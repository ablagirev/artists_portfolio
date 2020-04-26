import React from 'react'
import styled from 'styled-components'

export const Layout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>
}

const LayoutWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`
