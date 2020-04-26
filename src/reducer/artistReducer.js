import { createSymbiote } from 'redux-symbiote'
const namespace = 'artist'

const initialState = {
  list: {
    fetching: true,
    rows: [],
    total: 0
  },
  details: {
    fetching: true
  },
  error: {}
}

const symbiotes = {
  getArtistList: state => {
    return { ...state, list: { fetching: true } }
  },
  getArtistListSuccess: (state, { data }) => {
    return { ...state, list: { ...data, fetching: false } }
  },
  getArtistListFail: (state, { error }) => {
    return { ...state, error: { message: { ...error }, fetching: false } }
  },
  getArtistDetails: state => {
    return { ...state, details: { fetching: true } }
  },
  getArtistDetailsSuccess: (state, { data }) => {
    return { ...state, details: { ...data, fetching: false } }
  },
  getArtistDetailsFail: (state, { error }) => {
    return { ...state, error: { message: { ...error }, fetching: false } }
  }
}

export const { actions: artistActions, reducer: artistReducer } = createSymbiote(initialState, symbiotes, namespace)
