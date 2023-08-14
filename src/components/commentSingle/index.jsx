import { useState } from "react";
import { fetchOneUser } from "../../hooks/Auth";


const CommentSingle = ({comments, id, date}) =>{
    const userComment = fetchOneUser(id)
    function getTimeAgo(datestamp) {
        const now = new Date();
        const timestamp = new Date(datestamp);
        const timeDiff = now - timestamp;
        
        if (timeDiff < 60000) { 
            return Math.floor(timeDiff / 1000) + " seconds ago";
        } else if (timeDiff < 3600000) { 
            return Math.floor(timeDiff / 60000) + " minutes ago";
        } else if (timeDiff < 86400000) { 
            return Math.floor(timeDiff / 3600000) + " hours ago";
        } else {
            return Math.floor(timeDiff / 86400000) + " days ago";
        }
    }

// const CommentSingle = ({user, comment}) =>{
    const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1559&q=80');
    
    return (
        <div className="flex my-1">
            <div className="flex justify-center items-center text-white rounded-full border border-gray-500 w-6 h-6 hover:cursor-pointer">
                {userComment&&userComment.image!==null?
                <img src={userComment.image} alt="Profile" className="w-full h-full rounded-full object-cover object-center"/>
                :
                <img src={profileImage} alt="Profile" className="w-full h-full rounded-full object-cover object-center"/>}
            </div>
            <div className="flex flex-col w-full">
                {userComment?
                <h1 className="text-gray-500 px-2 w-fit">{userComment.name}<span className="text-white pl-2">{comments}</span></h1>
                :null}            
                <p className="text-xs text-end text-gray-500"> {getTimeAgo(date)} </p>
            </div>
        </div>
    )
}
export default CommentSingle;