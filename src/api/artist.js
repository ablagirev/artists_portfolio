import axios from 'axios'

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production' ? 'https://europe-west1-marias-bureau.cloudfunctions.net/' : '/'

const getArtistList = type => axios.get(`/api/${type}`)

const getArtistDetails = (type, artistId) => axios.get(`/api/${type}/${artistId}`)

export const artistApi = { getArtistList, getArtistDetails }
