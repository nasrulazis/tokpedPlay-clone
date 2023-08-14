import axios from 'axios'

const URL = 'http://localhost:3000'

const useAxios = axios.create({
    baseURL:URL,
    withCredentials:true
})

export default useAxios;