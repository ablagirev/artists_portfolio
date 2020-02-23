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
        <Row>
          <Col span={0} xl={2} />
          <Col>
            <WrapperBreadCrumbs>
              <Breadcrumbs data={breadcrumbs} />
            </WrapperBreadCrumbs>
          </Col>
          <Col span={0} xl={2} />
        </Row>
        <Row>
          <Col span={0} lg={2} />
          <Col span={24} lg={20}>
            <ContentWrapper>
              <ImgWrapper>
                <img src={img} />
              </ImgWrapper>
              <Spacer />
              <Description>
                <CustomHeading size="xl" bold>
                  {title}
                </CustomHeading>
                <Spacer />
                <Text size="md">{text}</Text>
                <Spacer space={32} />
                <Divider width="20%" />
              </Description>
            </ContentWrapper>
          </Col>
          <Col span={0} lg={2} />
        </Row>
      </Body>
      <Footer mobileShow={true} />
    </>
  )
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1080px;

  @media (max-width: ${theme.breakpoint}px) {
    flex-direction: column;
    max-width: 100%;
  }
`

const CustomHeading = styled(Heading)`
  line-height: 24px;
`

const ImgWrapper = styled.div`
  width: 50%;

  img {
    width: 100%;
    max-width: 510px;

    @media (max-width: ${theme.breakpoint}px) {
      max-width: 100%;
    }
  }

  @media (max-width: ${theme.breakpoint}px) {
    width: 100%;
  }
`

const Body = styled.div`
  position: relative;
  flex: 1 0 auto;

  @media (max-width: ${theme.breakpoint}px) {
    padding: 0;
  }
`

const Description = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${theme.breakpoint}px) {
    padding: 0 1em;
    width: 100%;
  }
`

const WrapperBreadCrumbs = styled.div`
  padding-bottom: 1em;
  @media (max-width: ${theme.breakpoint}px) {
    padding: 1em;
  }
`
