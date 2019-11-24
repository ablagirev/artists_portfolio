import { createSymbiote } from 'redux-symbiote'
const namespace = 'common_data'

const initialState = { firstRenderPassed: false, ip: null }

const symbiotes = {
  firstRenderPassed: (state, payload) => {
    return { ...state, firstRenderPassed: payload }
  },
  setIp: (state, payload) => {
    return { ...state, ip: payload }
  }
}

export const { actions: commonActions, reducer: common } = createSymbiote(
  initialState,
  symbiotes,
  namespace
)
