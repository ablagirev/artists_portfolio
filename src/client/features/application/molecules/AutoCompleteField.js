import React, { useCallback } from 'react'
import { AutoComplete } from '@mts_bank/mtsbankui'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { change } from 'redux-form'
import Autosuggest from 'react-autosuggest'

import { suggestionsActions } from '../../suggestions/reducer'

export const AutoCompleteField = ({
  suggestType,
  getSuggestionValue,
  onFocus,
  mask,
  value,
  onChange,
  error,
  textarea,
  onSuggestionSelected,
  component,
  ...rest
}) => {
  const dispatch = useDispatch()
  const mapState = useCallback(state => ({
    suggestionsLoaded: state.suggestions.loaded[suggestType],
    suggestionsSelected: state.suggestions.selected[suggestType]
  }))
  const { suggestionsLoaded, suggestionsSelected } = useMappedState(mapState)
  const fetchSuggestions = (value, method) => {
    dispatch(
      suggestionsActions.getSuggestions({
        value,
        suggestType
      })
    )
  }

  // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
  const inputProps = {
    value: value ? value : '',
    error: !!error,
    errorMsg: error,
    mask: mask,
    onChange: (event, { newValue }) => {
      onChange(newValue)
    },
    ...rest
  }

  return (
    <AutoComplete
      inputProps={inputProps}
      suggestions={suggestionsLoaded}
      getSuggestionValue={getSuggestionValue}
      fetchSuggestions={fetchSuggestions}
      textarea={textarea}
      onSuggestionSelected={onSuggestionSelected}
      {...rest}
    ></AutoComplete>
  )
}
