import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Col, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { Text, Icon, Divider, Spacer } from 'ui-kit'
import { theme } from 'theme'
import { headerActions } from 'reducer'
import { Additional } from './Additional'

export const Header = () => {
  const dispatch = useDispatch()
  const mapState = useSelector(state => ({
    header: state.header
  }))

  useEffect(() => {
    dispatch(headerActions.getHeader())
  }, [dispatch])

  const {
    header: { menu, contacts, logo, fetching, error }
  } = mapState

  return !fetching && !error.message ? (
    <HeaderWrapper>
      <MobileHeaderWrapper>
        <MobileHeaderMainMenu>
          <Row>
            <Col span={12}>
              <MobileLogo href={logo.link}>
                <img src={logo.img.mobile} alt={logo.value} />
              </MobileLogo>
            </Col>
            <Col span={8} />
            {contacts.map((item, index) => {
              return (
                (item.type === 'cell' || item.type === 'post') && (
                  <Col span={2} key={index}>
                    <a href={item.type === 'post' ? `mailto:${item.value}` : `tel:${item.value}`}>
                      <Icon type={item.type} fill={theme.colors.gray.dark} />
                    </a>
                  </Col>
                )
              )
            })}
          </Row>
        </MobileHeaderMainMenu>
        <MobileFixedMenu>
          <CustomRow>
            {menu.map(item => {
              return (
                <Col span={8} key={item.id}>
                  <MobileMenuLinkWrapper>
                    <a href={item.link}>
                      <Text color={theme.colors.blue.primary}>{item.value.toUpperCase()}</Text>
                    </a>
                  </MobileMenuLinkWrapper>
                </Col>
              )
            })}
          </CustomRow>
        </MobileFixedMenu>
      </MobileHeaderWrapper>

      <DesktopHeaderWrapper>
        <Row>
          <Col span={10}>
            <Spacer space={10} />
            <CustomRow>
              {menu.map(item => {
                return (
                  <Col span={4} key={item.id}>
                    <a href={item.link}>
                      <Text>{item.value.toUpperCase()}</Text>
                    </a>
                  </Col>
                )
              })}
            </CustomRow>
            <Spacer space={16} />
            <Divider />
          </Col>
          <Col span={4}>
            <DesktopLogo href={logo.link}>
              <img src={logo.img.desktop} alt={logo.value} />
            </DesktopLogo>
          </Col>
          <Col span={10}>
            <Spacer space={10} />
            <CustomRow>
              <Col span={17} />
              <Col span={7}>
                <Additional data={contacts} />
              </Col>
            </CustomRow>
            <Spacer space={16} />
            <Divider />
          </Col>
        </Row>
      </DesktopHeaderWrapper>
    </HeaderWrapper>
  ) : null
}

const MobileMenuLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const MobileFixedMenu = styled.div`
  position: fixed;
  bottom: -1px;
  width: 100%;
  background-color: ${theme.colors.white};
  padding: 8px 20px;
  z-index: 1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 8px 8px 0 0;
  min-height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const MobileHeaderMainMenu = styled.div`
  position: fixed;
  padding: 8px 20px;
  width: 100%;
  background-color: ${theme.colors.white};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05), 0 1px 1px rgba(0, 0, 0, 0.05);
`

const HeaderWrapper = styled.div`
  z-index: 1;
`
const MobileHeaderWrapper = styled.div`
  display: none;
  @media (max-width: ${theme.breakpoint}px) {
    display: block;
    position: relative;
    min-height: 42px;
  }
`

const DesktopHeaderWrapper = styled.div`
  padding: 8px 20px;
  min-height: 110px;
  @media (max-width: ${theme.breakpoint}px) {
    display: none;
  }
`

const DesktopLogo = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  min-width: 165px;

  img {
    width: 100%;
    max-width: 200px;
  }
`

const CustomRow = styled(Row)`
  line-height: 20px;
  width: 100%;
`

const MobileLogo = styled.a`
  img {
    width: 150px;
    height: 26px;
  }
`
