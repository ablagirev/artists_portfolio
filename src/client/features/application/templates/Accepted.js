import React from 'react'
import styled from 'styled-components'
import { theme, Container, Row, Col, Spacer, Heading, Text } from '@mts_bank/mtsbankui'

import { Clock } from 'assets/img/clock'

export const Accepted = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Container fluidmob={true}>
          <Row>
            <Col>
              <Spacer space={52} />
              <Clock></Clock>
              <Heading h={4}>Заявка принята</Heading>
              <Spacer space={12} />
              <StyledText sizemob="lg">
                Банк отправит решение на ваш номер в течение 5 минут
              </StyledText>
            </Col>
          </Row>
        </Container>
      </InnerWrapper>
    </Wrapper>
  )
}

const StyledText = styled(Text)`
  color: ${theme.colors.gray.g300};
`
const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  justify-content: center;
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  text-align: center;
`
const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 16px;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  * {
    box-sizing: border-box;
  }

  button {
    width: 100%;

    div {
      font-size: 16px;
    }
  }
`
