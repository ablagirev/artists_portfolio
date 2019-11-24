import React from 'react'
import styled from 'styled-components'
import { saveAs } from 'file-saver'
import {
  theme,
  CardInput,
  Button,
  Icon,
  Heading,
  Text,
  Spacer,
  ConfirmationField
} from '@mts_bank/mtsbankui'

import { Success as SuccessIcon } from 'assets/img/success'

export let Success = ({ type = 'selfCard', phoneNum = '+7 999 999-99-99', ...rest }) => {
  return (
    <OuterWrapper>
      <Wrapper centered={true}>
        <Spacer spacemob={52} />
        <IconWrapper>
          <SuccessIcon></SuccessIcon>
        </IconWrapper>
        <Spacer spacemob={12} />
        {type === 'newMtsCard' && (
          <React.Fragment>
            <Heading h={4}>Договор подписан</Heading>
            <Spacer spacemob={12} />
            <StyledText sizemob="lg">
              Мы перечислили 15 000 ₽ на вашу виртуальную карту МТС Банка
            </StyledText>
            <Spacer spacemob={32} />
            <StyledText sizemob="lg">
              {`Реквизиты вашей вирутальной карты отправлены в СМС на номер ${phoneNum}`}
            </StyledText>
          </React.Fragment>
        )}
        {type === 'selfCard' && (
          <React.Fragment>
            <Heading h={5}>Перевод принят в обработку </Heading>
            <Spacer spacemob={12} />
            <StyledText sizemob="lg">
              Мы перечисляем 15 000 ₽ на указанный вами номер карты
            </StyledText>
          </React.Fragment>
        )}
      </Wrapper>
    </OuterWrapper>
  )
}

const IconWrapper = styled.div`
  margin: 0 auto;
`
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
