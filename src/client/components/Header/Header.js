import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'antd'

import { Text, Icon, Divider, Spacer } from '../../ui-kit'
import { theme } from '../../theme'

export const Header = ({ data }) => {
  const { menu } = data
  const { contacts } = data
  const { logo } = data
  return (
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
        <LogoWrapper href={logo.link}>
          <img src={logo.img} alt={logo.value} />
        </LogoWrapper>
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
  )
}

const LogoWrapper = styled.a`
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
