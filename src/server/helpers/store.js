import axios from 'axios'

import { configureStore } from 'client/store'
import { signStatusCodes } from 'constants/signStatusCodes'
import { paStatusCodes } from 'constants/paStatusCodes'
import { paymentAdapterApi } from 'client/api/paymentAdapter'

const IS_PROD = process.env.NODE_ENV === 'production'
axios.defaults.baseURL = IS_PROD ? process.env.BASE_API : process.env.DEV_BASE_API

export const ssrCreateSignStore = async req => {
  const hash = req.url.split('/')[2]
  const response = await axios.get(`sign/${hash}`)

  const status = signStatusCodes.filter((statusInfo, i) => {
    return statusInfo.code === response.data.data.status
  })
  const isFetchingStatus = status.type === 'loading'
  const store = configureStore(
    {
      sign: {
        ...response.data,
        status: { ...status[0] },
        isFetchingStatus,
        isFetching: false
      }
    },
    req.url
  )
  return store
}

export const ssrCreateApplicationStore = async req => {
  const hash = req.url.split('/')[2]
  const { data } = await axios.get(`application/${hash}`)

  const store = configureStore(
    {
      application: {
        token: data.data.token,
        hash,
        step: 1,
        modal: null,
        fetching: false,
        error: false,
        applicationSent: false,
        photosSent: true
      }
    },
    req.url
  )
  return store
}

export const ssrCreatePAStore = async req => {
  const hash = req.url.split('/')[2]
  const response = await axios.get(`paymentAdapter/status/${hash}`)

  const status = paStatusCodes.filter((statusInfo, i) => {
    return statusInfo.code === response.data.data.status
  })
  const store = configureStore(
    {
      paymentAdapter: {
        status: { ...status[0] },
        hash
      }
    },
    req.url
  )
  return store
}
