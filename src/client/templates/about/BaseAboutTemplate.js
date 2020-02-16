import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import { Header, Footer } from '../../components'
import { Heading, Spacer, Text, Divider, Breadcrumbs } from '../../ui-kit'
import { theme } from '../../theme'

export const BaseAboutTemplate = ({ data }) => {
  const { title, text, img, breadcrumbs } = data
  return (
    <>
      <Header />
      <Body>
        <CustomBreadcrumbs data={breadcrumbs} />
        <Spacer />
        <Content>
          <ImgWrapper>
            <img src={img} />
          </ImgWrapper>
          <Spacer />
          <Description>
            <Heading size="xl" bold>
              {title}
            </Heading>
            <Spacer />
            <Text size="lg">{text}</Text>
            <Spacer space={32} />
            <Divider width="20%" />
          </Description>
        </Content>
      </Body>
      <Footer />
    </>
  )
}

const ImgWrapper = styled.div`
  img {
    width: 100%;
  }
`

const Body = styled.div`
  padding: 0 120px 60px 120px;
  position: relative;
  flex: 1 0 auto;

  @media (max-width: ${theme.breakpoint}px) {
    padding: 0;
    margin-top: 4em;
    padding-bottom: 50px;
  }
`

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;

  @media (max-width: ${theme.breakpoint}px) {
    flex-direction: column;
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
`

const CustomBreadcrumbs = styled(Breadcrumbs)`
  @media (max-width: ${theme.breakpoint}px) {
    padding: 0 1em;
  }
`
