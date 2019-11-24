import { createSymbiote } from 'redux-symbiote'
const namespace = 'suggestsions'

const initialState = {
  loaded: {
    fio: [],
    birthPlace: [],
    registration: [],
    residence: [],
    fms_unit: [],
    fetching: false
  },
  selected: {
    fio: [],
    birthPlace: [],
    registration: [],
    residence: [],
    fms_unit: []
  },
  search: {
    fio: false,
    birthPlace: false,
    fms_unit: false,
    registration: false,
    residence: false
  },
  fetching: false
}

const symbiotes = {
  getSuggestions: (state, payload) => {
    return { ...state, fetching: true }
  },
  setSuggestions: (state, payload) => {
    let items = payload.items
    return {
      ...state,
      loaded: {
        ...state.loaded,
        [payload.key]: items
      },
      fetching: false
    }
  },
  setSearch: (state, payload) => {
    return {
      ...state,
      search: {
        ...state.search,
        [payload.key]: payload.status
      }
    }
  },
  setSelected: (state, payload) => {
    return {
      ...state,
      selected: {
        ...state.selected,
        [payload.key]: payload.suggestion
      }
    }
  }
}

export const { actions: suggestionsActions, reducer: suggestions } = createSymbiote(
  initialState,
  symbiotes,
  namespace
)
