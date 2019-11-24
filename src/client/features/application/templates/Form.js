import React, { useCallback, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { reduxForm } from 'redux-form'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { theme, Container, Row, Col } from '@mts_bank/mtsbankui'

import { Modal } from '../molecules/Modal'
import { Step } from '../molecules/Step'
import { PersonalForm } from '../organisms/PersonalForm'
import { PassportForm } from '../organisms/PassportForm'
import { PhotoForm } from '../organisms/PhotoForm'
import { JobDelivery } from '../organisms/JobDelivery'
import { AddDocDorm } from '../organisms/AddDocForm'
import { jobOptions, deliveryOptions, genderOptions } from '../utils'

import { Error } from 'features/error/molecules/Error'

export const Form = ({
  step,
  modal,
  nextStep,
  previousStep,
  hideModal,
  showModal,
  sendPhotos,
  sendApplication
}) => {
  const anchorRef = useRef()
  const dispatch = useDispatch()
  const scrollToTop = () => {
    anchorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const mapState = useCallback(state => ({
    error: state.application.error
  }))
  const { error } = useMappedState(mapState)

  useEffect(() => {
    setTimeout(scrollToTop, 100)
  }, [step])

  return error ? (
    <Error />
  ) : (
    <Wrapper>
      <Anchor ref={anchorRef} />
      <Step onPrevious={previousStep} step={step} />
      <InnerWrapper>
        <Container fluidmob={true}>
          <Row>
            <Col>
              {step !== 5 ? (
                <Wizard
                  step={step}
                  nextStep={nextStep}
                  showModal={showModal}
                  sendApplication={sendApplication}
                />
              ) : (
                <PhotoForm onSubmit={sendPhotos} />
              )}
            </Col>
          </Row>
        </Container>
      </InnerWrapper>
      <Background show={modal} />
      <ModalWrapper>
        <Modal modal={modal} close={hideModal} />
      </ModalWrapper>
    </Wrapper>
  )
}

let Wizard = ({ step, nextStep, showModal, sendApplication }) => {
  return (
    <React.Fragment>
      {step === 1 && <PersonalForm handleSubmit={nextStep} />}
      {step === 2 && <PassportForm showModal={showModal} handleSubmit={nextStep} />}
      {step === 3 && <JobDelivery showModal={showModal} handleSubmit={nextStep} />}
      {step === 4 && <AddDocDorm onSubmit={sendApplication} />}
    </React.Fragment>
  )
}
Wizard = reduxForm({
  form: 'application',
  initialValues: {
    job: jobOptions[0],
    insuranceAgree: true,
    delivery: deliveryOptions[0].value,
    searchFms: '',
    sameAddress: true,
    restrictionsTax: true,
    restrictionsPublic: false,
    restrictionsUsa: false,
    searchFio: '',
    months: 6,
    gender: genderOptions[0].value,
    infoAgree: true,
    dataAgree: true,
    historyAgree: true
  }
})(Wizard)

const Anchor = styled.div`
  top: 0;
  height: 1px;
  width: 1px;
  background: transparent;
  position: absolute;
`
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
const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  justify-content: center;
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
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

const Background = styled.div`
  opacity: ${({ show }) => (show ? 0.8 : 0)};
  pointer-events: ${({ show }) => (show ? 'all' : 'none')};
  transition: all ${theme.transitions.basic};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: ${theme.colors.black};
  z-index: 1;
`
