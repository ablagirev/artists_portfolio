import axios from 'axios'

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production' ? 'https://europe-west1-marias-bureau.cloudfunctions.net/' : '/'

export { axios }
