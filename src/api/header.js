import { axios } from './axios'

const getHeader = () => axios.get('/api/header')

export const headerApi = { getHeader }
