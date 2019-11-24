import axios from 'axios'

const baseURL = process.env.SUGGESTIONS_API
const token = process.env.SUGGESTIONS_TOKEN

const axiosClient = axios.create({
  baseURL,
  headers: {
    ContentType: 'application/json',
    Accept: 'application/json',
    Authorization: `Token ${token}`
  }
})

const fio = async query => {
  const response = await axiosClient.post('suggestions/api/4_1/rs/suggest/fio/', {
    query
  })
  return response
}

const address = async query => {
  const response = await axiosClient.post('suggestions/api/4_1/rs/suggest/address', {
    query
  })
  return response
}

const city = async query => {
  const response = await axiosClient.post('suggestions/api/4_1/rs/suggest/address/', {
    query,
    from_bound: { value: 'city' },
    to_bound: { value: 'city' }
  })
  return response
}

const fms_unit = async query => {
  const response = await axiosClient.post('suggestions/api/4_1/rs/suggest/fms_unit/', {
    query
  })
  return response
}
const countryCode = async query => {
  const response = await axiosClient.post('suggestions/api/4_1/rs/suggest/country/', {
    query
  })
  return response
}
export const suggestionsApi = {
  fio,
  address,
  fms_unit,
  city,
  countryCode
}
