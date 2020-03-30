import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import { Text } from 'ui-kit'
import { theme } from 'theme'

export const Filmography = ({ data: { filmography } }) => {
  const { label, value } = filmography

  const renderFilmography = data => {
    return data.map(({ year, name, role: {name: roleName, main}, director }, index) => {
      const role = main ? `${roleName} - главная роль` : roleName

      return (
        <Row key={`filmography-${index}`}>
          <FilmographyWrapper>
            <Col span={10}>
              <ColWrapper>
                <Text>{year}</Text>
              </ColWrapper>
            </Col>
            <Col span={14}>
              <Text>{`«${name}». ${role}. Режиссёр: ${director}`}</Text>
            </Col>
          </FilmographyWrapper>
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
        <Col>{renderFilmography(value)}</Col>
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
const FilmographyWrapper = styled.div`
  margin: 12px 0 0 0;
`
