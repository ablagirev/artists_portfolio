import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import { Text } from 'ui-kit'
import { theme } from 'theme'

export const Theatre = ({ data: { theatre } }) => {
  const { label,  name } = theatre

  const hasTheatreData = Boolean(label && name)

  return (
    <>
      {hasTheatreData &&
        <RowWrapper>
          <Row>
            <Col span={10}>
              <Text color={theme.colors.blue.primary}>{label}</Text>
            </Col>
            <Col span={14}>{name}</Col>
          </Row>
        </RowWrapper>
      }
    </>
  )
}

const RowWrapper = styled.div`
  margin: 32px 0 0 0;
`
const ColWrapper = styled.div`
  padding: 0 0 0 20px;
`
