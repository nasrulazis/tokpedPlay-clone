import { useEffect, useState } from "react";
import useAxios from "../../lib/axios";

export const fetchProductinVideo = (id) => {
    const [product, setProduct] = useState(null);
    const handleVideo = async () =>{
        try {
            const response = await useAxios.get(`/api/product/${id}`)
            // const token = response.data.token;
            setProduct(response.data.data);
            } catch (error) {
            console.error('Error fetching video data:', error);
            }
    }

    
    useEffect(() => {
        handleVideo();
        
    }, []);

    return (product)
}
