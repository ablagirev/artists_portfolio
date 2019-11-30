import { createSymbiote } from 'redux-symbiote'
const namespace = 'artist'

const initialState = {
  fetching: false,
  data: [],
  total: 0
}

const symbiotes = {
  getArtistList: (state, payload) => {
    return { ...state, fetching: true }
  },
  getArtistListSuccess: (state, payload) => {
    return { ...state, fetching: false }
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
