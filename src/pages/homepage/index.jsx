import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import VideoSingle from "../../components/videoSingle";
import useAxios from "../../lib/axios";
import fetchVideo from "../../hooks/videos";

const Homepage = () => {
    const {videos, setSearch} = fetchVideo()
    const [searchInput, setSearchInput] = useState(null)

    const handleSearch = () => {
        setSearch(searchInput); 
    };
    const handleSearchInputChange = (e) => {
        const inputValue = e.target.value;
        setSearchInput(inputValue);
        setSearch(inputValue); // Memanggil setSearch untuk memulai pencarian
    };
    useEffect(() => {
        handleSearch()
        console.log(videos)
    }, []);

    return(
        <>
            <Navbar/>
            <div className="bg-[#28282F] px-4 py-2">
                    <form action="" className="mb-4">
                        <input type="text" name="search" onChange={handleSearchInputChange} value={searchInput} className="px-4 py-2 rounded-0 border-b focus:border focus:rounded-full bg-transparent focus transition-all duration-700 focus:transition text-white" placeholder="Search videos"/>
                    </form>
                <button className="border-2 border-gray-600 rounded-full py-2 px-4 text-white">All Videos</button>
            </div>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 2xl:grid-cols-6 p-4 h-fit bg-[#28282F] min-h-[805px]">
            {videos?videos.map((video)=>{
                return(
                    <VideoSingle imgUrl={video.urlThumbnail} title={video.title} username={video.user.name} videoId={video._id} />
                )
            }):null}
            </div>
        </>
    )
}

export default Homepage;