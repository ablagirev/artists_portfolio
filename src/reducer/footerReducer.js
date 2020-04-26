import { createSymbiote } from 'redux-symbiote'

const namespace = 'footer'

const initialState = {
  fetching: true,
  contacts: [],
  social: [],
  attachment: {},
  additional: [],
  designer: {},
  error: {}
}

const symbiotes = {
  getFooter: state => {
    return { ...state, fetching: true }
  },
  getFooterSuccess: (state, { data }) => {
    return { ...state, ...data, fetching: false }
  },
  getFooterFail: (state, { error }) => {
    return { ...state, error: { message: { ...error } }, fetching: false }
  }
}

export const { actions: footerActions, reducer: footerReducer } = createSymbiote(initialState, symbiotes, namespace)
