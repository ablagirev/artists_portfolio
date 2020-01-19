import { createSymbiote } from 'redux-symbiote'
const namespace = 'header'

const initialState = {
  fetching: false,
  contacts: [],
  social: [],
  attachment: {},
  additional: [],
  designer: {}
}

const symbiotes = {
  getFooter: (state, payload) => {
    return { ...state, fetching: true }
  },
  getFooterSuccess: (state, { data }) => {
    return { ...state, ...data, fetching: false }
  },
  getFooterFail: (state, payload) => {
    return { ...state, fetching: false }
  }
}

export const { actions: footerActions, reducer: footerReducer } = createSymbiote(
  initialState,
  symbiotes,
  namespace
)
