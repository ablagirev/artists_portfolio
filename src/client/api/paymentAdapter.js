import axios from 'axios'

const getStatus = ({ hash, replace }) => {
  return axios.get(`/site2-payment-adapter/status/${hash}/`)
}

const getNewCode = ({ hash }) => {
  return axios.post('/site2-payment-adapter/generate/', {
    hash
  })
}

const sign = ({ card, code, hash }) => {
  return axios.post('/site2-payment-adapter/sign/', {
    card,
    hash,
    code
  })
}

export const paymentAdapterApi = {
  getStatus,
  getNewCode,
  sign
}
