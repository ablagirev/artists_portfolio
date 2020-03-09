import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Col, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { Text, Icon, Heading } from 'client/ui-kit'
import { theme } from 'client/theme'
import { footerActions } from 'client/reducer'

export const Footer = ({ mobileShow = false }) => {
  const dispatch = useDispatch()
  const mapState = useSelector(state => ({
    footer: state.footer
  }))

  useEffect(() => {
    dispatch(footerActions.getFooter())
  }, [])

  const {
    footer: { social, contacts, attachment, additional, designer }
  } = mapState

  return (
    <FooterWrapper mobileShow={mobileShow}>
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
                    <a href={item.link}>
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
                    <a
                      key={item.id}
                      href={item.type === 'post' ? `mailto:${item.value}` : `tel:${item.value}`}
                    >
                      <Text>
                        {item.type === 'post' ? 'E' : 'T'}: {item.value}
                      </Text>
                    </a>
                  )
                })}
              </FlexWrapper>
            </Col>
            <Col span={24} lg={12}>
              <FlexWrapper>
                <a href={attachment.link}>
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
        <Col span={18}></Col>
        <Col span={24} lg={4}>
          <DesignerWrapper>
            <a href={designer.link}>
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
  @media (max-width: ${theme.breakpoint}px) {
    display: ${({ mobileShow }) => (mobileShow ? 'block' : 'none')};
    padding: 1em 1em 49px 1em;
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
