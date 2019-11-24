import React, { useCallback, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useMappedState, useDispatch } from 'redux-react-hook'
import {
  Icon,
  theme,
  Container,
  Row,
  Heading,
  Col,
  Button,
  Text,
  Spacer
} from '@mts_bank/mtsbankui'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { paymentAdapterActions } from '../../paymentAdapter/reducer'
import { Loading } from '../atoms/Loading'
import { SignForm } from '../organisms/SignForm'
import { Result } from '../organisms/Result'
import { Modal } from '../molecules/Modal'

export const Sign = () => {
  const ref = useRef()
  const dispatch = useDispatch()
  const mapState = useCallback(state => ({
    isFetchingStatus: state.sign.isFetchingStatus,
    isFetching: state.sign.isFetching,
    status: state.sign.status,
    data: state.sign.data,
    common: state.common
  }))
  const { data, common, status, isFetchingStatus, isFetching } = useMappedState(mapState)

  const [showModal, setModal] = useState(false)
  const [showLoading, setLoading] = useState(false)

  const scrollTop = () => {
    ref.current.parentNode.scrollTop = 0
  }

  useEffect(() => {
    if (common.firstRenderPassed) {
      if (status.modal && !isFetchingStatus && !isFetching) {
        setModal(true)
        setTimeout(() => {
          setModal(false)
        }, 5000)
      }
      if ((isFetching || isFetchingStatus) && !showLoading) {
        setLoading(true)
      }
      if (!isFetching && isFetchingStatus) {
        dispatch(paymentAdapterActions.subscribeToRefresh(data.uid, 'sign'))
      }
      if (!isFetching && !isFetchingStatus && showLoading) {
        setLoading(false)
      }
    }
  }, [status, isFetching, isFetchingStatus])

  return (
    <React.Fragment>
      <OuterWrapper ref={ref}>
        <Wrapper centered={status.type === 'final' && status.code !== 1000}>
          <Container fluidmob={true}>
            <Row>
              <Col>
                {status.type === 'sign' && !isFetchingStatus && !isFetching && (
                  <SignForm data={data} common={common} scrollTop={scrollTop} />
                )}
                {status.type === 'final' && !isFetchingStatus && !isFetching && (
                  <Result
                    data={data}
                    status={status}
                    common={common}
                    isFetching={isFetchingStatus}
                  />
                )}
                <Loading show={showLoading}/>
              </Col>
            </Row>
          </Container>
        </Wrapper>
        <Background
          show={showModal}
          onClick={() => {
            setModal(false)
          }}
        />
        <ModalWrapper>
          <Modal show={showModal} modalType={status.name} close={() => setModal(false)}></Modal>
        </ModalWrapper>
      </OuterWrapper>
    </React.Fragment>
  )
}

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  pointer-events: none;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
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
const Header = styled.div`
  display: flex;
  min-height: 72px;
  width: 100%;
  background-color: ${theme.colors.red.primary};
  align-items: center;
  justify-content: center;
`
const Background = styled.div`
  opacity: ${({ show }) => (show ? 0.5 : 0)};
  pointer-events: ${({ show }) => (show ? 'all' : 'none')};
  transition: all ${theme.transitions.basic};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: ${theme.colors.black};
  z-index: 1;
`
