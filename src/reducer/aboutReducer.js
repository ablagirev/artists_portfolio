import { createSymbiote } from 'redux-symbiote'

const namespace = 'about'

const initialState = {
  fetching: true,
  general: { title: '', text: '', img: '' },
  contacts: { social: [], contacts: [], attachment: {}, additional: [] },
  error: {}
}

const symbiotes = {
  getAbout: state => {
    return { ...state, fetching: true }
  },
  getAboutSuccess: (state, { data }) => {
    return { ...state, ...data, fetching: false }
  },
  getAboutFail: (state, { error }) => {
    return { ...state, error: { message: { ...error } }, fetching: false }
  }
}

export const { actions: aboutActions, reducer: aboutReducer } = createSymbiote(initialState, symbiotes, namespace)
