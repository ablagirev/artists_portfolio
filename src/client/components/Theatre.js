import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import { Text } from 'client/ui-kit'
import { theme } from 'client/theme'

export const Theatre = ({ data: { theatre } }) => {
  const { label, value } = theatre

  const renderTheatre = data => {
    return data.map(({ year, name }, index) => {
      return (
        <Row key={`theater-${index}`}>
          <TheatreWrapper>
            <Col span={10}>
              <ColWrapper>
                <Text>{year ? `${year}:` : '-'}</Text>
              </ColWrapper>
            </Col>
            <Col span={14}>
              <Text>{name}</Text>
            </Col>
          </TheatreWrapper>
        </Row>
      )
    })
  }

  return (
    <RowWrapper>
      <Row>
        <Col>
          <Text color={theme.colors.blue.primary}> {label}</Text>
        </Col>
        <Col>{renderTheatre(value)}</Col>
      </Row>
    </RowWrapper>
  )
}

const RowWrapper = styled.div`
  margin: 32px 0 0 0;
`
const ColWrapper = styled.div`
  padding: 0 0 0 20px;
`
const TheatreWrapper = styled.div`
  margin: 12px 0 0 0;
`
