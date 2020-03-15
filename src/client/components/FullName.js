import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

import { Heading, Text } from 'client/ui-kit'
import { theme } from 'client/theme'

export const FullName = ({ data: { fullName } }) => {
  return (
    <Row>
      <Col>
        <ColWrapper>
          <Heading size="md" color={theme.colors.blue.primary}>
            {fullName}
          </Heading>
        </ColWrapper>
      </Col>
    </Row>
  )
}

const ColWrapper = styled.div`
  margin: 0;
  justify-content: start;

  @media (max-width: ${theme.breakpoint}px) {
    margin: 24px 0 0 0;
    display: flex;
    justify-content: center;
  }
`
