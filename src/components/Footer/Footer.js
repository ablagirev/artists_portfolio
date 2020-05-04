import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'antd'

import { Text, Icon, Heading } from 'ui-kit'
import { theme } from 'theme'

// eslint-disable-next-line react/prop-types
export const Footer = ({ data }) => {
  const { social, contacts, attachment, additional, designer } = data

  return (
    <FooterWrapper>
      <FooterHeading>
        <Heading size="xl" bold>
          Контакты
        </Heading>
      </FooterHeading>
      <Row>
        <Col span={0} lg={1} xl={2} />
        <Col span={6} lg={3} xl={2}>
          <SocialIcons>
            <Row>
              {social.map(item => {
                return (
                  <Col span={7} key={item.id}>
                    <a
                      href={item.type === 'post' ? `mailto:${item.link}` : item.link}
                      target={item.type === 'post' ? '' : '_blank'}
                    >
                      <Icon type={item.type} fill={theme.colors.gray.dark} />
                    </a>
                  </Col>
                )
              })}
            </Row>
          </SocialIcons>
        </Col>
        <Col span={24} lg={7} xl={6}>
          <Row>
            <Col span={24} lg={12}>
              <FlexWrapper>
                {contacts.map(item => {
                  return (
                    <div key={item.id}>
                      <Text>{item.name}</Text>
                      <Text>T: {item.value}</Text>
                    </div>
                  )
                })}
              </FlexWrapper>
            </Col>
            <Col span={24} lg={12}>
              <FlexWrapper>
                <a href={attachment.link} target="_blank">
                  <CustomText>{attachment.value}</CustomText>
                </a>
              </FlexWrapper>
            </Col>
          </Row>
        </Col>
        <Col span={24} lg={5}>
          <AdditionalInfoWrapper>
            <CustomUl>
              {additional.map(item => {
                return (
                  <li key={item.id}>
                    <Text color={theme.colors.gray.secondary} size="xxs">
                      {item.text}
                    </Text>
                    <Text color={theme.colors.gray.secondary} size="xxs">
                      {item.phone}
                    </Text>
                  </li>
                )
              })}
            </CustomUl>
          </AdditionalInfoWrapper>
        </Col>
      </Row>
      <Row>
        <Col span={18} />
        <Col span={24} lg={4}>
          <DesignerWrapper>
            <a href={designer.link} target="_blank">
              <DesignerText color={theme.colors.gray.light}>{designer.value}</DesignerText>
            </a>
          </DesignerWrapper>
        </Col>
        <Col span={1} xl={2} />
      </Row>
    </FooterWrapper>
  )
}

const SocialIcons = styled.div`
  @media (max-width: ${theme.breakpoint}px) {
    padding-bottom: 16px;
  }
`

const FooterWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  flex: 0 0 auto;
  @media (max-width: ${theme.breakpoint}px) {
    display: none;
    padding: 1em 1em 49px 1em;
    min-height: 100px;
  }
`

const FooterHeading = styled.div`
  display: none;
  @media (max-width: ${theme.breakpoint}px) {
    display: block;
    padding-bottom: 20px;
  }
`

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${theme.breakpoint}px) {
    align-items: flex-start;
    padding-bottom: 18px;
  }
`

const CustomText = styled(Text)`
  width: fit-content;
  border-bottom: 1px solid ${theme.colors.blue.primary};
`

const CustomUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const AdditionalInfoWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${theme.breakpoint}px) {
    justify-content: flex-start;
  }
`

const DesignerText = styled(Text)`
  font-size: 19px;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  @media (max-width: ${theme.breakpoint}px) {
    font-size: 14px;
  }

  &:hover {
    background-size: 100% 40%;
    color: ${theme.colors.blue.primary};
  }
`

const DesignerWrapper = styled.div`
  float: right;
`
