import React from 'react'
import styled from 'styled-components'
import {useLocation} from 'react-router-dom'

export const NotFound = () => {
  const location = useLocation()
  console.log(location)
  return <Wrapper>404</Wrapper>
}

const Wrapper = styled.ul`
  color: ${'purple'};
`
