import { createSymbiote } from 'redux-symbiote'

import { paStatusCodes } from '../../constants/paStatusCodes'

const namespace = 'paymentAdapter_data'

export const getStatusInfo = code => {
  return paStatusCodes.filter(status => status.code === parseInt(code)).pop()
}

const initialState = {
  status: {},
  isFetching: false,
  error: ''
}

const symbiotes = {
  getStatus: state => {
    return { ...state }
  },
  getStatusSuccess: (state, { status }) => {
    return { ...state, status }
  },
  getStatusFail: (state, { error }) => {
    return { ...state, status: {}, error }
  },
  setStatus: (state, payload) => {
    return { ...state, isFetchingStatus: false, status: { ...getStatusInfo(payload.status) } }
  },
  signRequest: (state, payload) => {
    return { ...state, isFetching: true, status:{} }
  },
  signSuccess: (state, { code }) => {
    return { ...state, isFetching: false, status: { ...getStatusInfo(code) } }
  },
  signFail: (state, { error }) => {
    return { ...state, isFetching: false, status: {}, error }
  },
  getNewCode: (state, payload) => {
    return { ...state, isFetching: true }
  },
  getNewCodeSuccess: (state, payload) => {
    return {
      ...state,
      isFetching: false,
      isFetchingStatus: true
    }
  },
  getNewCodeFail: (state, { error }) => {
    return {
      ...state,
      isFetching: false,
      status: {},
      error
    }
  },
  subscribeToRefresh: (state, payload) => {
    return { ...state, subscribe: true }
  },
  unsubscribe: (state, payload) => {
    return { ...state, subscribe: false }
  }
}

export const { actions: paymentAdapterActions, reducer: paymentAdapter } = createSymbiote(
  initialState,
  symbiotes,
  namespace
)
