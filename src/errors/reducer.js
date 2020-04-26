import { createSymbiote } from 'redux-symbiote'

const namespace = 'app'
const initialState = {}

const symbiotes = {
  fail: state => state,
  failComplete: (state, data) => {
    const { reducerName, error } = data
    return state.set(reducerName, error)
  },
  reset: () => ({})
}

export const { actions: errorActions, reducer: errors } = createSymbiote(
  initialState,
  symbiotes,
  namespace
)
