import { axios } from './axios'

const getArtistList = type => axios.get(`/api/${type}`)

const getArtistDetails = (type, artistId) => axios.get(`/api/${type}/${artistId}`)

export const artistApi = { getArtistList, getArtistDetails }
