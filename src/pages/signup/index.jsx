import React, { useState } from 'react';
import { Link , useNavigate   } from 'react-router-dom';
import axios from 'axios';
import useAxios from '../../lib/axios'



const RegisterPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');
    
    const handleRegister = async (e) => {
        e.preventDefault()
        try {
        const response = await useAxios.post('/api/user/signup', { name, email, password, image }, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // const token = response.data.token;
        // console.log('Logged in user:', response.data);
        navigate('/login');
        } catch (error) {
        setError('Login failed. Please check your credentials.');
        console.error('Login error:', error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="w-full h-20">
            <img
                src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/play/kratos/c1ff6020..jpg"
                alt="Cover"
                className="w-full h-full object-cover object-center"
            />
            </div>
            <form >
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <input
                type="text"
                className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-green-500"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Image</label>
                <input
                type="text"
                className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-green-500"
                placeholder="Enter your Image link"
                value={image}
                onChange={e => setImage(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input
                type="email"
                className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-green-500"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Password</label>
                <input
                type="password"
                className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:border-green-500"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </div>
                <button onClick={handleRegister} type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300">
                    Register
                </button>
            </form>
            <h4 className="text-black text-center mt-4">&copy; Cloned by Nasrul Azis</h4>
        </div>
        </div>
    );
};

export default RegisterPage;
