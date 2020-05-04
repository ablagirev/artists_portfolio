import React, { useState } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import { Text } from 'ui-kit'
import { theme } from 'theme'

export const Filmography = ({ data: { filmography } }) => {
  const { label, value } = filmography
  const sortedMovies = value.sort((current, next) => next.year - current.year)
  const shownMovies = sortedMovies.slice(0, 10)
  const hiddenMovies = sortedMovies.slice(10)
  const [opened, setOpened] = useState(false)

  const renderFilmography = data => {
    return data.map(({ year, name, role: { name: roleName, main }, director }, index) => {
      const role = main ? `${roleName} - главная роль` : roleName

      return (
        <Row key={`filmography-${index}`} gutter={[0, 12]}>
          <Col span={10}>
            <ColWrapper>
              <Text>{year}</Text>
            </ColWrapper>
          </Col>
          <Col span={14}>
            <Text>{`«${name}». ${role}. Режиссёр: ${director}`}</Text>
          </Col>
        </Row>
      )
    })
  }

  return (
    <RowWrapper>
      <Row>
        <Col span={24}>
          <Text color={theme.colors.blue.primary}> {label}</Text>
        </Col>
        <Col span={24}>
          {renderFilmography(shownMovies)}
          {hiddenMovies.length ? <OtherMovies opened={opened}>{renderFilmography(hiddenMovies)}</OtherMovies> : null}
        </Col>
      </Row>
      {hiddenMovies.length ? (
        <Row>
          <ShowMoreButton onClick={() => setOpened(!opened)}>
            <Text color={theme.colors.blue.primary}>
              {opened ? 'Свернуть список фильмов' : 'Показать больше фильмов'}
            </Text>
            <ButtonArrow opened={opened} />
          </ShowMoreButton>
        </Row>
      ) : null}
    </RowWrapper>
  )
}
const ShowMoreButton = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  cursor: pointer;
  margin-top: 1em;
  margin-right: 1em;
`
const ButtonArrow = styled.i`
  width: 6px;
  height: 6px;
  position: absolute;
  border: solid ${theme.colors.blue.primary};
  border-width: 0 2px 2px 0;
  right: -12px;
  top: ${({ opened }) => (opened ? '10px' : '9px')};
  transform: ${({ opened }) => (opened ? 'rotate(-135deg)' : 'rotate(-45deg)')};
  transition: 200ms ease-in-out;

  ${ShowMoreButton}:hover & {
    transform: ${({ opened }) => (opened ? 'rotate(-135deg)' : 'rotate(45deg)')};
    animation: ArrowMove 1s infinite;
    transition: 500ms ease-in-out;
  }

  @keyframes ArrowMove {
    0% {
      top: 12px;
    }
    50% {
      top: 4px;
    }
    100% {
      top: 12px;
    }
  }
`

const RowWrapper = styled.div`
  margin: 32px 0 0 0;
  position: relative;
`
const ColWrapper = styled.div`
  padding: 0 0 0 20px;
`

const OtherMovies = styled.div`
  transform: ${({ opened }) => (opened ? 'scale(1)' : 'scale(0)')};
  height: ${({ opened }) => (opened ? 'initial' : '0')};
  overflow: ${({ opened }) => (opened ? 'initial' : 'hidden')};
  transition: 150ms cubic-bezier(0, 0, 0.58, 1);
`
