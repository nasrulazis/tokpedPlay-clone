import { useEffect, useState } from "react";
import Navbar from "../../components/navbar"
import ProductSingle from "../../components/productSingle";
import { useParams } from 'react-router-dom';
import useAxios from "../../lib/axios";
import { fetchOneVideo } from "../../hooks/videos";
import { fetchProductinVideo } from "../../hooks/products";
import CommentSingle from './../../components/commentSingle/index';
import { fetchOneUser, fetchUser, useAuth } from "../../hooks/Auth";
import {  useComment } from "../../hooks/comments";
import { io } from "socket.io-client";

const SingleVideoPage = () => {
    const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1559&q=80');
    const [showProduct, setShowProduct] = useState(true);
    const [comments,setComment] = useState(null);
    const {id} = useParams();
    const { postComment } = useComment();

    
    
    const videos = fetchOneVideo(id);
    const products = fetchProductinVideo(id)
    const logged_user = fetchUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const commentInput = e.target.comment;
        const comment = commentInput.value;
        if (comment.trim() !== '') {
            await postComment(videos._id, comment);
            commentInput.value = ''; 
        }
    };
    const handleProductClick = () => {
        setShowProduct((prev) => !prev);
    };
    const socket = io(import.meta.env.VITE_BASE_URL);
    const commentGet = async () =>{
        try {
            const data = await useAxios.get(`/api/video/${id}`)
            setComment(data.data.comments)
            
        } catch (error) {
            console.log(error)
        }
    }
    
    
    useEffect(() => {
        commentGet()
        socket.on('from-server',()=>{
            commentGet()
        })
        return () => {
            socket.off('from-server')
        }
    }, []);
    


    return(
        <div className="bg-[#28282F] h-screen">
            <Navbar/>
            <div id="video" className="bg-[#28282F] py-2">
                <div className="flex flex-col px-4 3xl:px-36 2xl:px-24 pt-0">
                    <div className="flex items-center mb-4">
                        <div className="flex justify-center items-center text-white rounded-full border border-gray-500 w-10 h-10 m-2 hover:cursor-pointer">
                        {videos&&videos.user.image!==null?
                            <img src={videos.user.image} alt="Profile" className="w-full h-full rounded-full object-cover object-center"/>:
                            <img src={profileImage} alt="Profile" className="w-full h-full rounded-full object-cover object-center"/>}
                        </div>
                        {videos?
                        <>
                        <h1 className="text-white text-3xl font-semibold">{videos.user.name} |</h1>
                        <h1 className="text-white text-3xl font-semibold mx-2">{videos.title}</h1>
                        </>
                        :null   
                        }
                    </div>
                    <div className="flex flex-col xl:flex-row items-center justify-evenly">
                        <div className="w-2/3 h-[400px] xl:h-[600px]">
                            {videos?
                            <iframe 
                                className="w-full h-full" 
                                src={`https://www.youtube.com/embed/${videos.linkVideo.split('v=')[1]}?controls=0`} 
                                title="YouTube video player" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen>
                            </iframe>
                            :null   
                            }
                        </div>
                        {/* commentSide */}
                        <div id="commentSide" className="bg-[#28282F] border rounded-lg border-gray-500 mx-auto my-4 xl:my-0 w-96 h-[600px]">
                            <div className="h-4/5 bg-[#28282F] border-b border-gray-500 rounded-t-lg overflow-hidden flex flex-col-reverse bottom-0">
                                <div className="overflow-y-auto flex-grow flex flex-col-reverse p-4" style={{ scrollbarWidth: "none" }}>
                                    {comments?comments.map((comment)=>{
                                        return(
                                            <CommentSingle id={comment.user} comments={comment.comment} date={comment.createdAt} />
                                        )
                                    }).reverse()
                                    :null}
                                </div>
                            </div>
                            {videos?
                            <form className="h-1/5 bg-[#28282F] p-4 rounded-b-lg" onSubmit={handleSubmit}>
                                <div className="flex items-center">
                                <div className="flex justify-center items-center text-white rounded-full border border-gray-500 w-6 h-6 mx-2 hover:cursor-pointer">
                                    {logged_user&&logged_user.image!==null?
                                    <img src={logged_user.image} alt="Profile" className="w-full h-full rounded-full object-cover object-center"/>
                                    :<img src={profileImage} alt="Profile" className="w-full h-full rounded-full object-cover object-center"/>}
                                </div>
                                {logged_user?
                                <label className="block text-sm font-medium text-gray-200">{logged_user.name}</label>
                                :null}
                                </div>
                                <div className="flex">
                                    <input type="text" name="comment" className="my-2 w-full px-4 py-2 border-b focus:outline-none border-gray-600 focus:border-gray-200 bg-transparent focus transition-all duration-500 focus:transition text-gray-500 focus:text-white" placeholder="Say something..."/>
                                    <button type="submit" className="text-white text-end w-fit ml-2">
                                        Send
                                    </button>
                                </div>
                            </form>
                            :null}
                        </div>
                    </div>
                </div>
            </div>
            {/* product below */}
            <div className="bg-[#28282F] bg-opacity-50 absolute bottom-0 w-full h-fit px-4 3xl:px-36 2xl:px-24">
                <div className="flex justify-center">
                    <button className="text-white bg-gray-700 w-1/3 bg-opacity-50" onClick={handleProductClick}>V</button>
                </div>
                {showProduct && (
                <div id="scroll" className={`flex flex-wrap flex-col items-center w-full xl:h-52 scroll-smooth justify-start overflow-x-auto transition-all duration-300`}>
                    {products&&videos?products.map((product)=>{
                        return(
                            <ProductSingle title={product.productName} price={product.price} imgUrl={product.linkImageProduct} linkProduct={product.linkProduct} />
                        )}):
                    null
                }
                </div>
                )}
            </div>
        </div>
    )

}

export default SingleVideoPage;