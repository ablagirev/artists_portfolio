import React from 'react'
import styled from 'styled-components'
import { Heading, Spacer, Text, Button, Icon, theme } from '@mts_bank/mtsbankui'

import { Success } from 'client/assets/img/success'
import { Error } from 'client/assets/img/error'
import { Warning } from 'client/assets/img/warning'

export const Modal = ({ show, close, modalType }) => {
  return (
    <ModalWrapper show={show}>
      <StyledIcon type="close" fill={theme.colors.gray.primary} onClick={close} />
      <ModalBody show={show}>
        <Spacer spacemob={16}></Spacer>
        {modalType === 'noMoreRegen' && (
          <React.Fragment>
            <StyledIcon></StyledIcon>
            <Warning></Warning>
            <Spacer spacemob={16} />
            <Heading h={5} sizemob="lg" size="lg">
              Вы исчерпали количество попыток перегенерации кода
            </Heading>
            <Spacer spacemob={16} />
            <Text sizemob="lg" size="lg">
              Подайте заявку снова через 24 часа
            </Text>
            <Spacer spacemob={16} />
          </React.Fragment>
        )}
        {modalType === 'serverError' && (
          <React.Fragment>
            <Warning></Warning>
            <Spacer spacemob={16} />
            <Heading h={5} sizemob="lg" size="lg">
              Техническая ошибка
            </Heading>
            <Spacer spacemob={16} />
            <Text sizemob="lg" size="lg">
              Попробуйте снова
            </Text>
            <Spacer spacemob={16} />
          </React.Fragment>
        )}
        {modalType === 'wrongCodeOrPhone' && (
          <React.Fragment>
            <Warning></Warning>
            <Spacer spacemob={16} />
            <Heading h={5} sizemob="lg" size="lg">
              Не удалось подписать договор
            </Heading>
            <Spacer spacemob={16} />
            <Text sizemob="lg" size="lg">
              Введите корректный номер телефона и код
            </Text>
            <Spacer spacemob={16} />
          </React.Fragment>
        )}
        {modalType === 'codeExpired' && (
          <React.Fragment>
            <Warning></Warning>
            <Spacer spacemob={16} />
            <Heading sizemob="lg" size="lg">
              Не удалось подписать договор.
            </Heading>
            <Spacer spacemob={16} />
            <Text sizemob="lg" size="lg">
              Получите новый код и попробуйте ещё раз.
            </Text>
            <Spacer spacemob={16} />
          </React.Fragment>
        )}
        {modalType === 'errRegenCode' && (
          <React.Fragment>
            <Warning></Warning>
            <Spacer spacemob={16} />
            <Heading h={5}>Техническая ошибка</Heading>
            <Spacer spacemob={16} />
            <Text sizemob="lg" size="lg">
              Попробуйте получить код еще раз
            </Text>
            <Spacer spacemob={16} />
          </React.Fragment>
        )}
        {modalType === 'codeSended' && (
          <React.Fragment>
            <Success></Success>
            <Spacer spacemob={16} />
            <Heading h={5} sizemob="lg" size="lg">
              Успешно
            </Heading>
            <Spacer spacemob={16} />
            <Text sizemob="lg" size="lg">
              Новый код отправлен
            </Text>
            <Spacer spacemob={16} />
          </React.Fragment>
        )}
        <Spacer spacemob={16}></Spacer>
      </ModalBody>
    </ModalWrapper>
  )
}

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
  height: 100%;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.basic};
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 16px;
  padding: 0 16px;
  border-radius: 4px;
  align-items: center;
`
const ModalWrapper = styled.div`
  display: flex;
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'all' : 'none')};
  transition: all ${theme.transitions.basic};
  height: 320px;
  width: 100%;
  top: 100px;
  z-index: 2;
`
