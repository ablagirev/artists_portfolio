import axios from 'axios'
import FormData from 'form-data'

import { suggestionsApi } from './suggestions'

export const getAccessToken = ({ hash }) => {
  return axios.get(`/api-ump/site2-uuid-generator/${hash}/`)
}

export const sendApplication = data => {
  const accessToken = localStorage.getItem('accessToken') || ''

  const axiosClient = axios.create({
    // baseURL: 'http://localhost:9001',
    headers: {
      'X-AUTH-TOKEN': accessToken
    }
  })
  return axiosClient.post('/api/v1/microloan/', { data })
}

const sendPhoto = async data => {
  const axiosClient = axios.create({
    // baseURL: process.env.FILE_SERVICE,
    headers: {
      ContentType: 'multipart/form-data'
    }
  })

  return axiosClient.post('/site2-hot-money/files/send/', data)
}

export const applicationApi = { sendApplication, sendPhoto, getAccessToken }
