import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import { Text } from 'client/ui-kit'
import { theme } from 'client/theme'

export const Education = ({ data: { education } }) => {
  const { label, value } = education

  return (
    <RowWrapper>
      <Row>
        <Col span={10}>
          <Text color={theme.colors.blue.primary}> {label}:</Text>
        </Col>
        <Col span={14}>
          <Text>{value}</Text>
        </Col>
      </Row>
    </RowWrapper>
  )
}

const RowWrapper = styled.div`
  margin: 32px 0 0 0;
`
