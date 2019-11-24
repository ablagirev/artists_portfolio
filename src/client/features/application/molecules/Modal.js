import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useMappedState } from 'redux-react-hook'
import { Heading, Spacer, Text, Button, Icon, List, theme } from '@mts_bank/mtsbankui'

export const list_data = [
  {
    id: 1,
    text: 'потери работы'
  },
  {
    id: 2,
    text: 'наступления полной неработоспособности'
  },
  {
    id: 3,
    text: 'ухода из жизни'
  }
]

export const Modal = ({ modal, close, children }) => {
  const mapState = useCallback(state => ({
    suggestions: state.suggestions.loaded
  }))
  const { suggestions } = useMappedState(mapState)
  return (
    <React.Fragment>
      {!!modal && (
        <ModalWrapper show={!!modal}>
          <ModalBody show={!!modal}>
            <StyledIcon type="close" fill={theme.colors.gray.primary} onClick={close} />

            {modal === 'eCard' && (
              <React.Fragment>
                <Heading h={5}>О виртуальной карте МТС Банка</Heading>
                <Spacer spacemob={10} />
                <Text sizemob="md" size="lg">
                  Вы получите реквизиты виртуальной карты в СМС. Вы можете совершать платежи и
                  переводы как с обычной банковской карты, испоьзуя реквизиты.
                </Text>
                <Spacer spacemob={30} />
                <StyledButton onClick={close}>Понятно</StyledButton>
              </React.Fragment>
            )}
            {modal === 'insurance' && (
              <React.Fragment>
                <Heading h={5} sizemob="lg">
                  О страховании кредита
                </Heading>
                <Spacer spacemob={10} />
                <Text sizemob="md">Подключая страховку в случаях</Text>
                <Spacer spacemob={4} />
                <StyledList size={'sm'} data={list_data} />
                <Text sizemob="md" size="lg">
                  банк выплатит кредит за вас.
                </Text>
                <Spacer spacemob={19} />
                <Text sizemob="md">Стоимость страховки от 136 ₽ в месяц</Text>
                <Spacer spacemob={28} />
                <StyledButton onClick={close}>Понятно</StyledButton>
              </React.Fragment>
            )}
          </ModalBody>
        </ModalWrapper>
      )}
    </React.Fragment>
  )
}

const StyledList = styled(List)`
  svg {
    fill: ${theme.colors.gray.g500};
  }
`
const StyledButton = styled(Button)`
  width: 100%;

  div {
    width: 100%;
    font-size: 16px;
  }
`
const StyledIcon = styled(Icon)`
  display: block;
  position: absolute;
  z-index: 3;
  right: 8px;
  top: 8px;
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
