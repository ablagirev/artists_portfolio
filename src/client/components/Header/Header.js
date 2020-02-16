import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Col, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { Text, Icon, Divider, Spacer } from 'client/ui-kit'
import { theme } from 'client/theme'
import { headerActions } from 'client/reducer'

export const Header = () => {
  const dispatch = useDispatch()
  const mapState = useSelector(state => ({
    header: state.header
  }))

  useEffect(() => {
    dispatch(headerActions.getHeader())
  }, [])

  const {
    header: { menu, contacts, logo, fetching }
  } = mapState

  return !fetching ? (
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
            {contacts.map(group => {
              return group.map((item, index) => {
                return (
                  (item.type === 'cell' || item.type === 'post') && (
                    <Col span={2} key={index}>
                      <Icon type={item.type} fill={theme.colors.gray.dark} />
                    </Col>
                  )
                )
              })
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
              <Col span={8} />
              {contacts.map((group, index) => {
                return (
                  <Col span={group.length === 1 ? 9 : 7} key={index}>
                    <Contacts>
                      {group.map(item => {
                        return item.type === 'cell' ? (
                          <CellLink href={`tel:${item.link}`} key={item.id}>
                            <CustomIcon type={item.type} fill={theme.colors.gray.dark} />
                            <CustomText color={theme.colors.gray.dark}>{item.link}</CustomText>
                          </CellLink>
                        ) : (
                          <a href={item.link} key={item.id}>
                            <CustomIcon type={item.type} fill={theme.colors.gray.dark} />
                          </a>
                        )
                      })}
                    </Contacts>
                  </Col>
                )
              })}
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
  }
`

const DesktopHeaderWrapper = styled.div`
  padding: 8px 20px;
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

const CustomIcon = styled(Icon)`
  margin-left: 1em;
`

const CustomText = styled(Text)`
  text-align: center;
`

const Contacts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
const CellLink = styled.a`
  display: flex;
  flex-direction: row;
`

const MobileLogo = styled.a`
  img {
    width: 150px;
    height: 26px;
  }
`
