import { axios } from './axios'

const getAbout = () => axios.get('/api/about')

export const aboutApi = { getAbout }
