import { createSymbiote } from 'redux-symbiote'
const namespace = 'artist'

const initialState = {
  fetching: false,
  rows: [],
  total: 0
}

const symbiotes = {
  getArtistList: (state, payload) => {
    return { ...state, fetching: true }
  },
  getArtistListSuccess: (state, { data }) => {
    return { ...state, ...data, fetching: false }
  },
  getArtistListFail: (state, payload) => {
    return { ...state, fetching: false }
  }
}

export const { actions: artistActions, reducer: artistReducer } = createSymbiote(
  initialState,
  symbiotes,
  namespace
)
