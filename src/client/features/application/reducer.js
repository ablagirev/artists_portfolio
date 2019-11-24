import { createSymbiote } from 'redux-symbiote'
const namespace = 'application_data'

const initialState = {
  step: 1,
  modal: null,
  fetching: false,
  error: false,
  applicationSent: false,
  photosSent: true
}

const symbiotes = {
  getAccessToken: (state, payload) => {
    return { ...state, fetching: true}
  },
  getAccessTokenSuccess: (state, payload) => {
    return { ...state, fetching: false }
  },
  getAccessTokenFail: (state, { error }) => {
    return { ...state, error, fetching: false }
  },
  nextStep: (state, payload) => {
    const newStep = state.step + 1
    return { ...state, step: newStep }
  },
  previousStep: (state, payload) => {
    const newStep = state.step > 1 ? state.step - 1 : state.step
    return { ...state, step: newStep }
  },
  showModal: (state, payload) => {
    return { ...state, modal: payload }
  },
  hideModal: (state, payload) => {
    return { ...state, modal: null }
  },
  sendApplication: (state, payload) => {
    return { ...state, fetching: true }
  },
  sendApplicationSuccess: (state, { id }) => {
    return { ...state, fetching: false, id }
  },
  sendApplicationFailure: (state, payload) => {
    return { ...state, fetching: false, error: true }
  },
  sendPhotos: (state, payload) => {
    return { ...state, fetching: true }
  },
  sendFirstPagePhoto: (state, payload) => {
    return { ...state, fetching: true }
  },
  sendRegistrationPhoto: (state, payload) => {
    return { ...state, fetching: true }
  },
  sendSelfiePhoto: (state, payload) => {
    return { ...state, fetching: true }
  },
  sendPhotoSuccess: (state, payload) => {
    return { ...state, fetching: false, photoSent: true }
  },
  sendPhotoFailure: (state, payload) => {
    return { ...state, fetching: false, error: true }
  }
}

export const { actions: applicationActions, reducer: application } = createSymbiote(
  initialState,
  symbiotes,
  namespace
)
