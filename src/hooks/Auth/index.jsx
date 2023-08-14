import Cookies from "js-cookie"
import jwt_decode from "jwt-decode"
import { useEffect, useState } from "react"
import useAxios from "../../lib/axios"

export const useAuth = () => {
    const token = document.cookies
    if (token) {
        const decoded = jwt_decode(token)
        return decoded;
    }
}

export const fetchUser = () => {
    const [user, setUser] = useState(null);
    const handleUser = async () =>{
        try {
            const response = await useAxios.get('/api/user/user')
            // const token = response.data.token;
            setUser(response.data);
            } catch (error) {
            console.error('Error fetching video data:', error);
            }
    }
    

    useEffect(() => {

        handleUser();
        
    }, []);

    return (user)
}

export const fetchOneUser = (id) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleOneUser = async () =>{
        try {
            const response = await useAxios.get(`/api/user/${id}`)
            // const token = response.data.token;
            setUser(response.data);
            } catch (error) {
            console.error('Error fetching user data:', error);
            }
    }
    
    useEffect(() => {
        handleOneUser();
    }, []);

    return (user)
    
}