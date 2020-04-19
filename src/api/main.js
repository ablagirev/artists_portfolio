import { axios } from './axios'

const getMain = () => axios.get('/api/main')

export const mainApi = { getMain }
