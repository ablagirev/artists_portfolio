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
    <>
      <Row>
        <Col span={10}>
          <Spacer space={10} />
          <CustomRow>
            {menu.map(item => {
              return (
                <Col span={4} key={item.id}>
                  <a href={item.link}>
                    <Text>{item.value}</Text>
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
            <Col span={7} />
            {contacts.map(item => {
              return (
                <React.Fragment key={item.id}>
                  {item.type === 'number' ? (
                    <Col span={7}>
                      <a href="#">
                        <CustomText color={theme.colors.gray.dark}>{item.link}</CustomText>
                      </a>
                    </Col>
                  ) : (
                    <Col span={2}>
                      <a href={item.link}>
                        <CustomIcon type={item.type} fill={theme.colors.gray.dark} />
                      </a>
                    </Col>
                  )}
                </React.Fragment>
              )
            })}
          </CustomRow>
          <Spacer space={16} />
          <Divider />
        </Col>
      </Row>
    </>
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
  float: right;
`

const CustomText = styled(Text)`
  text-align: center;
`
