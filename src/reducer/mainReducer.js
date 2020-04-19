import { createSymbiote } from 'redux-symbiote'

const namespace = 'main'

const initialState = {
  fetching: true,
  photos: {
    men: { title: '', picture: '' },
    women: { title: '', picture: '' }
  },
  error: {}
}

const symbiotes = {
  getMain: state => {
    return { ...state, fetching: true }
  },
  getMainSuccess: (state, { data }) => {
    return { ...state, ...data, fetching: false }
  },
  getMainFail: (state, { error }) => {
    return { ...state, error: { message: { ...error } }, fetching: false }
  }
}

export const { actions: mainActions, reducer: mainReducer } = createSymbiote(initialState, symbiotes, namespace)
