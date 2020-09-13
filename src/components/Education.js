import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import { Text } from 'ui-kit'
import { theme } from 'theme'

export const Education = ({ data: { education } }) => {

  const {
    main: { label: mainLabel, value: mainValue },
    additional: { label: additionalLabel, value: additionalValue }
  } = education

  return (
    <RowWrapper>
      {mainValue ?
        <Row>
          <Col span={10}>
            <Text color={theme.colors.blue.primary}> {mainLabel}:</Text>
          </Col>
          <Col span={14}>
            <Text>{mainValue}</Text>
          </Col>
        </Row> : null
      }
      {additionalValue ?
        <Row>
          <Col span={10}>
            <Text color={theme.colors.blue.primary}> {additionalLabel}:</Text>
          </Col>
          <Col span={14}>
            <Text>{additionalValue}</Text>
          </Col>
        </Row> : null
      }
    </RowWrapper>
  )
}

const RowWrapper = styled.div`
  margin: 32px 0 0 0;
`
