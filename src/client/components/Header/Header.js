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
          <Row>
            {menu.map(item => {
              return (
                <Col span={4} key={item.id}>
                  <a href={item.link}>
                    <Text>{item.value}</Text>
                  </a>
                </Col>
              )
            })}
          </Row>
          <Spacer space={16} />
          <Divider />
        </Col>
        <Col span={4}>
          <a href={logo.link}>
            <Logo src={logo.img} alt={logo.value} />
          </a>
        </Col>
        <Col span={10}>
          <Row>
            <Col span={8} />
            {contacts.map(item => {
              return (
                <React.Fragment key={item.id}>
                  {item.type === 'number' ? (
                    <Col span={6}>
                      <a href="#">
                        <Text color={theme.colors.gray.dark}>{item.link}</Text>
                      </a>
                    </Col>
                  ) : (
                    <Col span={2}>
                      <a href={item.link}>
                        <Icon type={item.type} fill={theme.colors.gray.dark} />
                      </a>
                    </Col>
                  )}
                </React.Fragment>
              )
            })}
          </Row>
          <Spacer space={16} />
          <Divider />
        </Col>
      </Row>
    </>
  )
}

const Logo = styled.img`
  width: 100%;
`
