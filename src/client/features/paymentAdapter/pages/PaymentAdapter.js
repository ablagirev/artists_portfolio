import React, { useCallback, useEffect } from 'react'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Row, Col } from '@mts_bank/mtsbankui'

import { paymentAdapterActions } from 'features/paymentAdapter/reducer'
import {
  Success,
  Accepted,
  Fail,
  Rejected,
  Loading,
  Modal
} from 'features/paymentAdapter/molecules'
import { Error } from 'features/error/molecules/Error'

export const PaymentAdapter = () => {
  const mapState = useCallback(state => ({
    status: state.paymentAdapter.status,
    isFetching: state.paymentAdapter.isFetching,
    error: state.paymentAdapter.error
  }))
  const { status, isFetching, error } = useMappedState(mapState)
  const { hash } = useParams()

  const dispatch = useDispatch()
  const resendCode = () => {
    dispatch(paymentAdapterActions.getNewCode({ hash }))
  }
  const sign = ({ card, code }) => {
    dispatch(paymentAdapterActions.signRequest({ card, code, hash }))
  }
  useEffect(() => {
    dispatch(paymentAdapterActions.getStatus({ hash }))
  }, [])

  // todo вынести в константы типы, реализовать стратегию по рендеру в зависимости от типа
  return (
    <OuterWrapper>
      <Wrapper>
        <Container fluidmob={true}>
          <Row>
            <Col>
              {error && <Error title="Произошла ошибка" description="Повторите позже" />}
              {status.type === 'start' && <Accepted resendCode={resendCode} onSubmit={sign} />}
              {status.type === 'success' && <Success />}
              {status.type === 'rejected' && <Rejected />}
              {(status.type === 'loading' || isFetching) && <Loading show={true} />}
              {status.type === 'notFound' && <Fail />}
            </Col>
          </Row>
        </Container>
      </Wrapper>

      <Modal text={status.text} header={status.header} show={status.modal} />
    </OuterWrapper>
  )
}

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
