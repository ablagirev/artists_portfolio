import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import { Text } from 'ui-kit'
import { theme } from 'theme'

export const Theatre = ({ data: { theatre } }) => {
  const { label, value } = theatre

  const hasTheatreData = Boolean(value.length && label)
  
  const renderTheatre = data => {
    return data.map(({ year, name }, index) => {
      return (
        <>
          {name &&
            <Row key={`theater-${index}`} gutter={[0, 12]}>
              <Col span={10}>
                <ColWrapper>
                  <Text>{year}</Text>
                </ColWrapper>
              </Col>
              <Col span={14}>
                <Text>{name}</Text>
              </Col>
            </Row>}
        </>
      )
    })
  }

  return (
    <>
      {hasTheatreData &&
        <RowWrapper>
          <Row>
            <Col span={24}>
              <Text color={theme.colors.blue.primary}>{label}</Text>
            </Col>
            <Col span={24}>{renderTheatre(value)}</Col>
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
