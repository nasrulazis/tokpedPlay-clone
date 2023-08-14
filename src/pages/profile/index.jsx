import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import { fetchUser } from '../../hooks/Auth';

const ProfilePage = () => {
    const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1559&q=80');
    const [password, setPassword] = useState('********');
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [newPassword, setNewPassword] = useState('');

    const handleImageChange = () => {
        // Implement logic to change the profile picture
        // You can use a file input or other methods to update the image URL
        // Example: setProfileImage(newImageUrl);
    };

    const handleChangePassword = () => {
        // Implement logic to change the password
    };

    const handleTogglePasswordForm = () => {
        setShowPasswordForm(!showPasswordForm);
    };

    const logged_user = fetchUser();
    return (
        <>
        <Navbar/>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <div className="mb-4 flex flex-col justify-center items-center">
                    <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full object-cover object-center mx-auto mb-2"/>
                    <button onClick={handleImageChange} className="bg-gray-300 w-fit text-white py-1 px-4 m-2 rounded hover:bg-gray-600 transition duration-300">
                        Change Profile Picture
                    </button>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Email</label>
                    {logged_user?
                    <p className="mt-1">{logged_user.email}</p>
                    :null}
                </div>
                {/* <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Password</label>
                    <p className="mt-1">{password}</p>
                </div> */}
                {showPasswordForm ? (
                <div>
                    <label className="block text-sm font-medium text-gray-600">New Password</label>
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter new password" className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500"/>
                    <div className='my-2'>
                        <button onClick={handleChangePassword} className="mt-2 bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600 transition duration-300">
                            Update Password
                        </button>
                        <button onClick={handleTogglePasswordForm} className="bg-gray-300 mx-2 text-white py-1 px-4 rounded hover:bg-red-600 transition duration-300">
                            Cancel
                        </button>
                    </div>
                </div>
                ) : (
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Password</label>
                        {logged_user?
                        <p className="mt-1">{logged_user.password}</p>
                        :null}
                        <button onClick={handleTogglePasswordForm} className="bg-green-500 my-2 text-white py-1 px-4 rounded hover:bg-green-600 transition duration-300">
                        Change Password
                        </button>
                    </div>
                )}
            </div>
        </div>
        </>
    );
};

export default ProfilePage;
