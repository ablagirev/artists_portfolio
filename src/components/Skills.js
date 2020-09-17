import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import { Text } from 'ui-kit'
import { theme } from 'theme'

export const Skills = ({ data: { skills } }) => {
  const { label, value } = skills

  const hasSkillsData = Boolean(value.length && label)

  const renderSkills = data => {
    return data.map(({ category, value }) => {
      return (
        value && (
          <Row key={category} gutter={[0, 12]}>
            <Col span={10}>
              <ColWrapper>
                <Text>{category}:</Text>
              </ColWrapper>
            </Col>
            <Col span={14}>
              <Text>{value}</Text>
            </Col>
          </Row>
        )
      )
    })
  }
  return (
    <>
      {hasSkillsData &&
        <RowWrapper>
          <Row>
            <Col span={24}>
              <Text color={theme.colors.blue.primary}>{label}</Text>
            </Col>
            <Col span={24}>
              {renderSkills(value)}
            </Col>
          </Row>
        </RowWrapper>}
    </>
  )
}

const RowWrapper = styled.div`
  margin: 8px 0 0 0;
`
const ColWrapper = styled.div`
  padding: 0 0 0 20px;
`
