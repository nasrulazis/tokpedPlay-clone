import { useEffect, useState } from "react";
import useAxios from "../../lib/axios";

export default function fetchVideo () {
    const [videos, setVideos] = useState([]);
    const [search, setSearch] = useState("");
    const handleVideo = async () =>{
        try {
            const response = await useAxios.get('/api/video'+ (search ? `/search?q=${search}` : ""))
            setVideos(response.data.data);
            } catch (error) {
            console.error('Error fetching video data:', error);
            }
    }


    useEffect(() => {
        handleVideo();
    }, [search]);

    return {videos, setSearch}
}

export const fetchOneVideo = (id) => {
    const [videos, setVideos] = useState(null);
    const handleOneVideo = async () =>{
        try {
            const response = await useAxios.get(`/api/video/${id}`)
            // const token = response.data.token;
            setVideos(response.data);
            } catch (error) {
            console.error('Error fetching video data:', error);
            }
    }

    useEffect(() => {
        handleOneVideo();
    }, []);

    return (videos)
}
