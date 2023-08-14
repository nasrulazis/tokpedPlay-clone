import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../../lib/axios";
import { fetchUser } from "../../hooks/Auth";

const Navbar = () => {
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1559&q=80');
    const navigate = useNavigate();
    const handleProfileClick = () => {
        setShowProfileMenu((prev) => !prev);
    };
    const logged_user = fetchUser();
    const handleLogout = async (e) => {
        e.preventDefault()
        try {
        const response = await useAxios.get('/api/user/logout');
        // const token = response.data.token;
        navigate('/login');
        } catch (error) {
        console.error('Login error:', error);
        }
    };
    return(
        <div className="flex items-center justify-between w-full p-4 bg-[#28282F] h-20 m-0">
            <div id="left-side" className="flex items-center">
                <Link className="link-register" to={"/"}>
                    <h1 className="font-bold text-white">TokpedPlay Clone</h1>
                </Link>
                <div className="mx-6">
                    
                </div>
            </div>
            <div id="right-side" className="px-4 flex items-center relative">
                {!logged_user?
                <Link className="link-register" to={"/login"}>
                    <button className='p-3 text-white'>Sign In</button>
                </Link>:null
                }
                {logged_user?
                    <h1 className="mx-2 text-white">Hi, {logged_user.name}</h1>:null
                }
                <div className="flex justify-center items-center text-white h-10 w-10 hover:cursor-pointer" onClick={handleProfileClick}>
                {logged_user&&logged_user.image!==null?
                    <img src={logged_user.image} alt="Profile" className="w-full h-full rounded-full object-cover object-center"/>:
                    <img src={profileImage} alt="Profile" className="w-full h-full rounded-full object-cover object-center"/>}
                </div>
                {showProfileMenu && (
                <div className="absolute  right-0 top-10 rounded-md z-10 bg-white shadow-md w-40">
                    <ul>
                        <Link className="link-register" to={"/profile"}>
                            <li className='p-3'>Profile</li>
                        </Link>
                        {/* <Link className="link-register" to={"/login"}> */}
                        {/* </Link> */}
                        <form onSubmit={handleLogout}>
                            <button type="submit" className='p-3 cursor-pointer' >Logout</button>
                        </form>
                    </ul>
                </div>
            )}
            </div>
            
        </div>
    )
}
export default Navbar;