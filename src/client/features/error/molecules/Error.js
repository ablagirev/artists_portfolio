import React from 'react'
import styled from 'styled-components'
import { theme, Container, Row, Heading, Col, Text, Spacer } from '@mts_bank/mtsbankui'

import { Warning } from 'assets/img/warning'

export const Error = ({ title, description }) => {
  return (
    <OuterWrapper>
      <Wrapper centered={true}>
        <Container fluidmob={true}>
          <Row>
            <Col>
              <Spacer spacemob={52} />
              <Warning />
              <Spacer spacemob={12} />
              <Heading h={4}>{title || 'Что-то пошло не так'}</Heading>
              <Spacer spacemob={8} />
              <StyledText sizemob="lg">
                {description || 'Обновите страницу и повторите заполнение анкеты' }
              </StyledText>
              <Spacer spacemob={32} />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </OuterWrapper>
  )
}

const StyledText = styled(Text)`
  color: ${theme.colors.gray.g300};
`

const OuterWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-overflow-scrolling: touch;
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 16px;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${({ centered }) => (centered ? 'center' : 'normal')};
  text-align: center;

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
