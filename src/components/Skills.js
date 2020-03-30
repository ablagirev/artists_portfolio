import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import { Text } from 'ui-kit'
import { theme } from 'theme'

export const Skills = ({ data: { skills } }) => {
  const { label, value } = skills
  const renderSkills = data => {
    return data.map(({ category, value }) => {
      return (
        <Row key={category}>
          <SkillsWrapper>
            <Col span={10}>
              <ColWrapper>
                <Text>{category}:</Text>
              </ColWrapper>
            </Col>
            <Col span={14}>
              <Text>{value}</Text>
            </Col>
          </SkillsWrapper>
        </Row>
      )
    })
  }
  return (
    <RowWrapper>
      <Row>
        <Col>
          <Text color={theme.colors.blue.primary}>{label}</Text>
        </Col>
      </Row>
      <Row>
        <Col>{renderSkills(value)}</Col>
      </Row>
    </RowWrapper>
  )
}

const RowWrapper = styled.div`
  margin: 8px 0 0 0;
`
const ColWrapper = styled.div`
  padding: 0 0 0 20px;
`
const SkillsWrapper = styled.div`
  margin: 12px 0 0 0;
`
