import React, { useCallback } from 'react'
import styled from 'styled-components'
import { saveAs } from 'file-saver'
import { Field, reduxForm } from 'redux-form'
import { useMappedState } from 'redux-react-hook'
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

import { CardField } from '../atoms/CardField'
import { CodeField } from '../atoms/CodeField'
import { required, card, code } from '../validation'

import { Success } from 'assets/img/success'


export let Accepted = ({ type = 'selfCard', resendCode, handleSubmit }) => {
  const mapState = useCallback(state => ({
    errors: state.form.accepted.syncErrors
  }))
  const { errors } = useMappedState(mapState)
  return (
    <OuterWrapper>
      <Wrapper centered={true}>
        <Spacer spacemob={52} />
        <IconWrapper>
          <Success />
        </IconWrapper>
        <Spacer spacemob={12} />

        <Heading h={4}>Договор подписан</Heading>
        <Spacer spacemob={12} />
        <StyledText sizemob="lg">
          Укажите номер карты, на которую мы перечислим ваши деньги
        </StyledText>
        <Spacer spacemob={32} />
        <form onSubmit={handleSubmit}>
          <CodeInput>
            <Field
              name="card"
              placeholder={'0000 0000 0000 0000'}
              component={CardField}
              validate={[required, card]}
            />
            <Spacer spacemob={32} />
            <Field
              name="code"
              resendCode={resendCode}
              component={CodeField}
              validate={[required, code]}
            />
          </CodeInput>
          <Spacer spacemob={32} />
          <StyledButton disabled={!!errors} fluid>
            Перечислить
          </StyledButton>
        </form>
      </Wrapper>
    </OuterWrapper>
  )
}

const IconWrapper = styled.div`
  margin: 0 auto;
`
const StyledButton = styled(Button)`
  div {
    width: 100%;
  }
`
const AgreementInfo = styled.div`
  text-align: left;
`

const Agreement = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 73px;
  background-color: ${theme.colors.gray.g700};
  padding: 14px 16px;
`

const CodeInput = styled.div`
  text-align: left;
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
Accepted = reduxForm({
  form: 'accepted',
  initialValues: { cardNumber: '' },
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false
})(Accepted)
