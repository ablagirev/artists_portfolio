import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import { Text } from 'ui-kit'
import { theme } from 'theme'
import { getAgeFromBirthDate } from '../helpers'

export const General = ({ data }) => {
  return (
    <RowWrapper>
      {Object.keys(data).map(key => {
        const { label, value, birth } = data[key]
        const age = getAgeFromBirthDate(birth)
        
        return (
        <>
          {key != 'age' && !value ? null :
            <Row key={key}>
              <Col span={10}>
                <Text color={theme.colors.blue.primary}> {label}:</Text>
              </Col>
              <Col span={14}>
                <Text>{age ? age : value}</Text>
              </Col>
            </Row>
          }
        </>
        )
      })}
    </RowWrapper>
  )
}

const RowWrapper = styled.div`
  margin: 34px 0 0 0;
`
