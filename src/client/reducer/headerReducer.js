import { createSymbiote } from 'redux-symbiote'
const namespace = 'header'

const initialState = {
  fetching: false,
  contacts: [],
  logo: {},
  menu: []
}

const symbiotes = {
  getHeader: (state, payload) => {
    return { ...state, fetching: true }
  },
  getHeaderSuccess: (state, { data }) => {
    return { ...state, ...data, fetching: false }
  },
  getHeaderFail: (state, payload) => {
    return { ...state, fetching: false }
  }
}

export const { actions: headerActions, reducer: headerReducer } = createSymbiote(
  initialState,
  symbiotes,
  namespace
)
