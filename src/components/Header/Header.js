import { Col, Row, Popover } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from 'theme'
import { Divider, Icon, Spacer, Text } from 'ui-kit'
import { Additional } from './Additional'

export const Header = ({ data }) => {
  const { menu, contacts, logo } = data

  return (
    <HeaderWrapper>
      <MobileHeaderWrapper>
        <MobileHeaderMainMenu>
          <Row>
            <Col span={20}>
              <MobileLogo to={logo.link}>
                <img src={logo.img.mobile} alt={logo.value} />
              </MobileLogo>
            </Col>
            <Col span={4}>
              <IconsWrapper>
                {contacts.map((item, index) => {
                  if (item.type === 'cell') {
                    const phones = item.phones.map((contact, id) => {
                      return (
                        // Иногда появляется warning prop key
                        <PhonesWrapper key={contact.cell}>
                          <Text>{contact.name}</Text>
                          <a href={`tel:${contact.cell}`}>
                            <Text>{contact.cell}</Text>
                          </a>
                          {id === 0 ? <Spacer space={8} /> : null}
                        </PhonesWrapper>
                      )
                    })
                    return (
                      <Popover content={phones} key={item.id} trigger="click">
                        <CustomIcon type={item.type} fill={theme.colors.gray.dark} />
                      </Popover>
                    )
                  }
                  if (item.type === 'post') {
                    return (
                      <CustomPostLink href={item.type === 'post' ? `mailto:${item.link}` : `tel:${item.link}`}>
                        <CustomIcon type={item.type} fill={theme.colors.gray.dark} />
                      </CustomPostLink>
                    )
                  }
                })}
              </IconsWrapper>
            </Col>
          </Row>
        </MobileHeaderMainMenu>
        <MobileFixedMenu>
          <CustomRow>
            {menu.map(item => {
              return (
                <Col span={8} key={item.id}>
                  <MobileMenuLinkWrapper>
                    <Link to={item.link}>
                      <Text color={theme.colors.blue.primary}>{item.value.toUpperCase()}</Text>
                    </Link>
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
                  <LinkItem key={item.id}>
                    <Link to={item.link}>
                      <Text>{item.value.toUpperCase()}</Text>
                    </Link>
                  </LinkItem>
                )
              })}
            </CustomRow>
            <Spacer space={16} />
            <Divider />
          </Col>
          <Col span={4}>
            <DesktopLogo to={logo.link}>
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
  )
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

const DesktopLogo = styled(Link)`
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

const LinkItem = styled.div`
  margin-right: 5%;
`

const MobileLogo = styled(Link)`
  img {
    width: 150px;
    height: 26px;
  }
`

const CustomIcon = styled(Icon)`
  margin-left: 10px;
  height: 20px;
  cursor: pointer;
`

const CustomPostLink = styled.a`
  height: 20px;
`

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`

const PhonesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`