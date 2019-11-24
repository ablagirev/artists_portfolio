import React, { useCallback, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Button, Heading, Spacer, Icon, Text, Input, theme } from '@mts_bank/mtsbankui'

import {
  renderInput,
  renderDateField,
  renderCheckbox,
  renderTextArea
} from '../atoms/AdaptedInputs'
import { AutoCompleteField } from '../molecules/AutoCompleteField'
import { required, requiredFalse, passNumbers, passportDate, address } from '../validation'
import { getFmsCodeSuggestions, getAddressSuggestions } from '../../suggestions/utils'

import { Search } from './Search'

import { suggestionsActions } from 'client/features/suggestions/reducer'

export let PassportForm = ({ handleSubmit }) => {
  const dispatch = useDispatch()
  const mapState = useCallback(state => ({
    errors: state.form.application.syncErrors,
    sameAddress: state.form.application.values.sameAddress,
    suggestions: state.suggestions.loaded,
    selected: state.suggestions.selected,
    search: state.suggestions.search
  }))
  const { errors, sameAddress, suggestions, selected, search } = useMappedState(mapState)

  return (
    <Wrapper id="passportForm" onSubmit={handleSubmit}>
      <Spacer spacemob={24} />
      <Heading h={5}>Паспортные данные</Heading>
      <Spacer spacemob={24} />
      <Field
        name="passport"
        placeholder={'0000 000000'}
        mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
        inputMode="numeric"
        label={'Серия и номер паспорта'}
        component={renderInput}
        validate={[required, passNumbers]}
      />
      <Spacer spacemob={16} />
      <Field
        name="passIssueDate"
        label="Дата выдачи"
        inputMode="numeric"
        component={renderDateField}
        validate={[required, passportDate]}
      />
      <Spacer spacemob={16} />
      <Field
        name="fmsUnitNum"
        placeholder={'000-000'}
        inputMode="numeric"
        mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
        keepCharPositions={false}
        label="Код подразделения"
        component={renderInput}
        onFocus={() => {
          dispatch(suggestionsActions.setSearch({ key: 'fms_unit', status: true }))
          dispatch(suggestionsActions.setSelected({ key: 'fms_unit', suggestion: { data: {} } }))
        }}
      />
      <Spacer spacemob={16} />
      <Field
        name="fmsUnitName"
        placeholder={'Как в паспорте'}
        label={'Кем выдан'}
        component={renderTextArea}
        validate={[required]}
      />
      <Spacer spacemob={16} />
      <Search
        search={search.fms_unit}
        onCancel={() => dispatch(suggestionsActions.setSearch({ key: 'fms_unit', status: false }))}
        label="Поиск подразделения"
        name="searchFms"
        placeholder="000-000"
        suggestType="fms_unit"
        autoFocus
        onSuggestionSelected={(e, { suggestion }) => {
          dispatch(suggestionsActions.setSelected({ key: 'fms_unit', suggestion }))
          dispatch(suggestionsActions.setSearch({ key: 'fms_unit', status: false }))
        }}
        getSuggestionValue={getFmsCodeSuggestions}
      />
      <Spacer spacemob={16} />
      <Field
        name="registration"
        placeholder={'Город, улица, дом, квартира'}
        label={'Адрес постоянной регистрации'}
        info={'Не забудьте номер квартиры'}
        component={renderTextArea}
        validate={[
          value => {
            let errors = address(value, selected.registration.data)
            return errors
          }
        ]}
        onFocus={() => {
          dispatch(suggestionsActions.setSearch({ key: 'registration', status: true }))
        }}
      />
      <Search
        search={search.registration}
        onCancel={() =>
          dispatch(suggestionsActions.setSearch({ key: 'registration', status: false }))
        }
        onConfirm={() => {
          dispatch(suggestionsActions.setSearch({ key: 'registration', status: false }))
          if (suggestions.registration.length > 0) {
            dispatch(
              suggestionsActions.setSelected({
                key: 'registration',
                suggestion: suggestions.registration[0]
              })
            )
          }
        }}
        placeholder={'Город, улица, дом, квартира'}
        suggestType="registration"
        label="Поиск адреса"
        component={AutoCompleteField}
        autoFocus
        textarea
        validate={[required, (value, allValues) => address]}
        // onSuggestionSelected={(e, { suggestion }) => {
        //   dispatch(suggestionsActions.setSelected({ key: 'registration', suggestion }))
        // }}
        getSuggestionValue={getAddressSuggestions}
      />
      <Spacer spacemob={16} />
      <Spacer spacemob={16} />
      <Field
        name="sameAddress"
        children={'Совпадает с адресом постоянной регистрации'}
        component={renderCheckbox}
      />
      <Field
        name="residence"
        placeholder={'Город, улица, дом, квартира'}
        label={'Адрес фактического проживания'}
        component={renderTextArea}
        disabled={sameAddress}
        validate={sameAddress ? null : [required]}
        onFocus={() => {
          dispatch(suggestionsActions.setSearch({ key: 'residence', status: true }))
        }}
      />
      <Spacer spacemob={16} />
      <Search
        search={search.residence}
        onCancel={() => dispatch(suggestionsActions.setSearch({ key: 'residence', status: false }))}
        onConfirm={() =>
          dispatch(suggestionsActions.setSearch({ key: 'residence', status: false }))
        }
        label="Поиск адреса"
        placeholder={'Город, улица, дом, квартира'}
        suggestType="residence"
        component={AutoCompleteField}
        autoFocus
        textarea
        onSuggestionSelected={(e, { suggestion }) => {
          dispatch(suggestionsActions.setSelected({ key: 'residence', suggestion }))
        }}
        getSuggestionValue={getAddressSuggestions}
      />
      <Spacer spacemob={16} />
      <Field
        name="restrictionsTax"
        children={'Я не являюсь иностранным налоговым резидентом'}
        component={renderCheckbox}
        validate={[required]}
        errorMessage={'Для оформления карты обратитесь в отделение МТС Банка'}
      />
      <Spacer spacemob={16} />
      <Field
        name="restrictionsPublic"
        children={'Я являюсь публичным должностным лицом'}
        component={renderCheckbox}
        validate={[requiredFalse]}
        errorMessage={'Для оформления карты обратитесь в отделение МТС Банка'}
      />
      <Spacer spacemob={16} />
      <Field
        name="restrictionsUsa"
        children={'Я являюсь налоговым резидентом США'}
        component={renderCheckbox}
        validate={[requiredFalse]}
        errorMessage={'Для оформления карты обратитесь в отделение МТС Банка'}
      />
      <Spacer spacemob={16} />
      <Button type="submit" disabled={!!errors}>
        Далее
      </Button>
      <Spacer spacemob={16} />
    </Wrapper>
  )
}

PassportForm = reduxForm({
  form: 'application',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(PassportForm)

const Wrapper = styled.form``
