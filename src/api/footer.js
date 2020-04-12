import { axios } from './axios'

const getFooter = () => axios.get('/api/footer')

export const footerApi = { getFooter }
