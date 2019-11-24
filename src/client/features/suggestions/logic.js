import { createLogic } from 'redux-logic'
import { change } from 'redux-form'

import { suggestionsActions } from './reducer'

import { suggestionsApi } from 'api/suggestions'

const getSuggestions = createLogic({
  type: suggestionsActions.getSuggestions().type,
  debounce: 100,
  async process(
    {
      getState,
      action: {
        payload: { suggestType, value }
      }
    },
    dispatch,
    done
  ) {
    const requestType =
      suggestType === 'registration' || suggestType === 'residence' ? 'address' : suggestType
    const request = suggestionsApi[requestType]
    const { data } = await request(value)
    const items = data.suggestions
    const newSuggests = {
      key: suggestType,
      items
    }
    dispatch(suggestionsActions.setSuggestions(newSuggests))

    done()
  }
})

const setSelected = createLogic({
  type: suggestionsActions.setSelected().type,
  process(
    {
      getState,
      action: {
        payload: { key, suggestion }
      }
    },
    dispatch,
    done
  ) {
    if (key === 'fms_unit') {
      dispatch(change('application', 'fmsUnitNum', suggestion.data.code))
      dispatch(change('application', 'fmsUnitName', suggestion.value))
    }
    if (key === 'registration') {
      dispatch(change('application', 'registration', suggestion.value))
    }
    if (key === 'residence') {
      dispatch(change('application', 'residence', suggestion.value))
    }
    if (key === 'fio') {
      dispatch(change('application', 'fio', suggestion.value))
    }
    done()
  }
})

export const suggestionsLogic = [getSuggestions, setSelected]
