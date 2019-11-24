import { createSymbiote } from 'redux-symbiote'

import { signStatusCodes } from 'client/constants/signStatusCodes'

const getStatus = code => {
  return signStatusCodes.filter(status => {
    return status.code === parseInt(code)
  })[0]
}

const namespace = 'sign_actions'

// todo заглушка, требуется сконфигурить initial state
const initialState = {
  status: {
    code: 10,
    name: 'initial',
    text: 'Заявка ожидает подписания',
    type: 'sign'
  },
  data: {
    customer: {
      firstname: 'dfs',
      middlename: 'aaa'
    },
    parameters: [],
    documents: []
  }
}

const symbiotes = {
  signRequest: (state, payload) => {
    return { ...state, isFetching: true }
  },
  signSuccess: (state, payload) => {
    return { ...state, isFetching: false}
  },
  signFail: (state, payload) => {
    return { ...state, isFetching: false, status: { ...getStatus(404), type: state.status.type } }
  },
  setStatus: (state, payload) => {
    return { ...state, isFetchingStatus: false, status: { ...getStatus(payload) } }
  },
  getNewCode: (state, { hash }) => {
    return { ...state, isFetching: true, hash }
  },
  getNewCodeSuccess: (state, payload) => {
    return {
      ...state,
      isFetching: false,
      status: { ...getStatus(2), type: state.status.type }
    }
  },
  getNewCodeFail: (state, payload) => {
    return { ...state, isFetching: false, status: { ...getStatus(404), type: state.status.type } }
  },
  refreshFail: (state, payload) => {
    return { ...state, isFetchingStatus: false, status: { ...getStatus(404), type: 'final' } }
  }
}

export const { actions: signActions, reducer: sign } = createSymbiote(
  initialState,
  symbiotes,
  namespace
)
