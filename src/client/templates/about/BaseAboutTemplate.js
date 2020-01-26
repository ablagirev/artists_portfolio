import React from 'react'
import styled from 'styled-components'

import { Header, Footer } from '../../components'
import { Heading, Spacer, Text, Divider, Breadcrumbs } from '../../ui-kit'

export const BaseAboutTemplate = ({ data }) => {
  const { title, text, img, breadcrumbs } = data
  return (
    <>
      <Header />
      <Body>
        <Breadcrumbs data={breadcrumbs} />
        <Spacer />
        <Content>
          <AboutImg src={img} />
          <FakeAboutImgBlock />
          <Description>
            <Heading size="lg">{title}</Heading>
            <Spacer />
            <Text size="md">{text}</Text>
            <Spacer space={32} />
            <Divider width="20%" />
          </Description>
        </Content>
      </Body>
      <Footer />
    </>
  )
}

const Body = styled.div`
  padding: 0 120px 120px 120px;
  position: relative;
  flex: 1 0 auto;
`

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`

const AboutImg = styled.img`
  width: 625px;
  height: 528px;
  position: absolute;
  left: -2em;
`

const FakeAboutImgBlock = styled.div`
  min-width: 515px;
  min-height: 528px;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
`
