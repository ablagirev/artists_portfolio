import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Heading, Spacer, Text, Button, Icon, theme } from '@mts_bank/mtsbankui'

import { Warning } from 'client/assets/img/warning'


export const Modal = ({ show, header, text }) => {
  const [showModal, setModal] = useState(false)
  useEffect(() => {
    setModal(show)
  }, [show])

  const handleClick = () => {
    setModal(false)
  }
  return showModal ? (
    <React.Fragment>
      <Background
        show={showModal}
        onClick={() => {
          setModal(false)
        }}
      />
      <ModalWrapperMain>
        <ModalWrapper show={showModal}>
          <StyledIcon type="close" fill={theme.colors.gray.primary} onClick={handleClick} />
          <ModalBody show={showModal}>
            <Spacer spacemob={16} />
            <IconWrapper>
              <Warning />
            </IconWrapper>
            <Spacer spacemob={16} />
            <Spacer spacemob={16} />
            <Heading h={5} sizemob="lg" size="lg">
              {header}
            </Heading>
            <Spacer spacemob={16} />
            <Text sizemob="lg" size="lg">
              {text}
            </Text>
            <Spacer spacemob={16} />
            <Spacer spacemob={16} />
          </ModalBody>
        </ModalWrapper>
      </ModalWrapperMain>
    </React.Fragment>
  ) : null
}

const IconWrapper = styled.div`
  margin: 0 auto;
`
const StyledIcon = styled(Icon)`
  display: block;
  position: absolute;

  svg {
    width: 32px;
    height: 32px;
  }
  z-index: 3;
  right: 0;
  padding-right: 32px;
  padding-top: 16px;
`
const ModalBody = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-height: 100%;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.basic};
  flex-direction: column;
  margin: 0 13px;
  padding: 28px 32px;
  border-radius: 4px;
  text-align: center;
`
const ModalWrapper = styled.div`
  display: flex;
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'all' : 'none')};
  transition: all ${theme.transitions.basic};
  min-height: 160px;
  max-height: calc(100% - 50px);
  width: 100%;
  top: 100px;
  z-index: 2;
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

const ModalWrapperMain = styled.div`
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
