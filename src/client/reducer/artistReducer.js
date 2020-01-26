import { createSymbiote } from 'redux-symbiote'
const namespace = 'artist'

const initialState = {
  fetching: false,
  list: {
    rows: [],
    total: 0
  },
  details: {},
  error: {}
}

const symbiotes = {
  getArtistList: (state, payload) => {
    return { ...state, fetching: true }
  },
  getArtistListSuccess: (state, { data }) => {
    return { ...state, list: { ...data }, fetching: false }
  },
  getArtistListFail: (state, payload) => {
    return { ...state, fetching: false }
  },
  getArtistDetails: (state, payload) => {
    return { ...state, fetching: true }
  },
  getArtistDetailsSuccess: (state, { data }) => {
    return { ...state, details: { ...data }, fetching: false }
  },
  getArtistDetailsFail: (state, { error }) => {
    return { ...state, error: { ...error }, fetching: false }
  }
}

export const { actions: artistActions, reducer: artistReducer } = createSymbiote(
  initialState,
  symbiotes,
  namespace
)
