import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Button, Heading, Text, Spacer, Link } from '@mts_bank/mtsbankui'

import { renderInput, renderRadioGroup, renderCheckbox, renderSelect } from '../atoms/AdaptedInputs'
import { DeliveryPicker } from '../atoms/DeliveryPicker'
import { required } from '../validation'
import { jobOptions, deliveryOptions } from '../utils'

export let JobDelivery = ({ scrollToTop, showModal, handleSubmit }) => {
  const mapState = useCallback(state => ({
    jobType: state.form.application.values.job,
    errors: state.form.application.syncErrors
  }))
  const { jobType, errors } = useMappedState(mapState)

  return (
    <Wrapper id="jobdelivery" onSubmit={handleSubmit}>
      <Spacer spacemob={24} />
      <Heading h={5}>Информация о работе</Heading>
      <Spacer spacemob={22} />
      <Field id="jobSelect" name="job" options={jobOptions} component={renderSelect}></Field>
      {jobType.more && (
        <React.Fragment>
          <Spacer spacemob={22} />
          <Field
            name="otherJobType"
            placeholder="Пожалуйста, уточните"
            component={renderInput}
            validate={jobType.more ? [required] : null}
          />
        </React.Fragment>
      )}
      <Spacer spacemob={24} />
      <Heading h={5}>Способ получения кредита</Heading>
      <Spacer spacemob={24} />
      {/*<Field name="delivery" hidden={true} options={deliveryOptions} component={renderRadioGroup}>
        <DeliveryPicker />
      </Field>*/}
      <Spacer spacemob={13} />
      <StyledLink
        onClick={() => {
          showModal('eCard')
        }}
      >
        <Text size={'lg'}>О виртуальной карте</Text>
      </StyledLink>
      <Spacer spacemob={24} />
      <Field name="insuranceAgree" children={'Платежи застрахованы'} component={renderCheckbox} />
      <Spacer spacemob={4} />
      <LinkWrapper>
        <StyledLink
          onClick={() => {
            showModal('insurance')
          }}
        >
          <Text size={'lg'}>О страховании</Text>
        </StyledLink>
      </LinkWrapper>
      <Spacer spacemob={16} />
      <Button type="submit" disabled={!!errors}>
        Далее
      </Button>
      <Spacer spacemob={16} />
    </Wrapper>
  )
}
const StyledLink = styled(Link)`
  display: inline-flex;
`
const LinkWrapper = styled.span`
  margin-left: 36px;
`

JobDelivery = reduxForm({
  form: 'application',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(JobDelivery)

const Wrapper = styled.form``
