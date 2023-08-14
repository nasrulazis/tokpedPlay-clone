import { Link } from "react-router-dom";

const VideoSingle = ({imgUrl,title,username='',videoId}) =>{
    return (
    <div className="max-w-md mx-auto">
        <div className="relative overflow-hidden rounded-lg">
            <div className="group h-96 w-60">
                <div
                    className="absolute inset-0 filter blur-sm"
                    style={{
                        backgroundImage: `url(${imgUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Link className="link-register" to={`/video/${videoId}`}>
                <img src={imgUrl} alt="Cover Image" className="w-full h-full object-contain transition-transform duration-300 transform-gpu group-hover:scale-105 group-hover:opacity-50 group-hover:cursor-pointer"/>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:cursor-pointer">
                    <div className="p-4 border-2 rounded-full text-gray-300 opacity-50 flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4v16l13-8L5 4z" />
                        </svg>
                    </div>
                </div>
                
                <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h2 className="text-xl font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{title}</h2>
                    <p className="text-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{username}</p>
                </div>
                </Link>
            </div>
        </div>
    </div>
    )
}
export default VideoSingle;