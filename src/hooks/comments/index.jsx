import { useEffect, useState } from "react";
import useAxios from "../../lib/axios";
import { io } from "socket.io-client";

export const useComment = () => {
    const [error, setError] = useState(null);
    const socket = io("http://localhost:3000");
    const postComment = async (videosId, comment) => {
        setError(null);
        try {
            
            // Perform the API call to post the comment
            const response = await useAxios.post(`/api/comment/${videosId}`, { comment });
            socket.emit("from-client", response.data.data)
            
            // Handle the response as needed
        } catch (error) {
            setError('Error posting comment');
        }
    };
    return {
        error,
        postComment
    };
};


