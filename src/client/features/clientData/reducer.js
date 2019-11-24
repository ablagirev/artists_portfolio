import { createSymbiote } from 'redux-symbiote'
const namespace = 'client_data'

const initialState = {}

const symbiotes = {}

export const { actions: clientDataActions, reducer: clientData } = createSymbiote(
  initialState,
  symbiotes,
  namespace
)
