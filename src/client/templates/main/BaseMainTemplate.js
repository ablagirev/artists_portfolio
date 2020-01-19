import React from 'react'
import styled from 'styled-components'

import { Heading, Text, Spacer } from '../../ui-kit'
import { Header, Footer } from '../../components'

import women from 'assets/img/main/women.png'
import men from 'assets/img/main/men.png'

export const BaseMainTemplate = ({ content, header, footer }) => {
  return (
    <>
      <Header data={header} />
      <Spacer space={32} />
      <Body>
        <a href="#">
          <img src={women} />
        </a>
        <Spacer space={20} />
        <a href="#">
          <img src={men} />
        </a>
      </Body>
      <Spacer space={71} />
      <Footer data={footer} />
    </>
  )
}

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
