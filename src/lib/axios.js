import axios from 'axios'

const URL = import.meta.env.VITE_BASE_URL

const useAxios = axios.create({
    baseURL:URL,
    withCredentials:true
})

export default useAxios;