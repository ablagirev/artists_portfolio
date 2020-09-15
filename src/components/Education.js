import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import { Text } from 'ui-kit'
import { theme } from 'theme'

export const Education = ({ data: { education } }) => {

  const { main, additional } = education
  const educationTypes = [main, additional]

  return (educationTypes.map(educationType => {
    return (
      <>
        {educationType.value &&
          <RowWrapper>
            <Row>
              <Col span={10}>
                <Text color={theme.colors.blue.primary}> {educationType.label}:</Text>
              </Col>
              <Col span={14}>
                <Text>{educationType.value}</Text>
              </Col>
            </Row>
          </RowWrapper>
        }
      </>
    )
  }))
}
const RowWrapper = styled.div`
  margin: 32px 0 0 0;
`
