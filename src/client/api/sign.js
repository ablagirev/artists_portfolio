import axios from 'axios'
import FormData from 'form-data'

const IS_PROD = process.env.NODE_ENV === 'production'

const getStatus = async uid => {
  const response = await axios.get('api/status/')
  return response
}

const sign = async ({ uid, phone, code, ip }) => {
  const form = new FormData()
  form.append('phone', phone)
  form.append('code', code)
  form.append('ip', ip)
  const response = await axios.post('api/sign/', form, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return response
}

const getNewCode = ({ uid, phone, ip }) => {
  const response = axios.post('api/refresh/', {
    phone,
    ip
  })
  return response
}

export const signApi = {
  getStatus,
  sign,
  getNewCode
}
