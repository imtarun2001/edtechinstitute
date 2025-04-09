import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';

export default function LogInPage({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const gotoDashboard = () => {
    if (formData.email && formData.password) {
      setIsLoggedIn(true);
      navigate('/dashboard');
      toast.success("Logged in");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-gray-100 to-white p-4 font-sans">
      
      {/* Form Section */}
      <div className="w-full max-w-md bg-yellow-300 rounded-xl shadow-lg p-6 flex flex-col gap-5">
        <h2 className="text-2xl font-bold text-pink-600">Welcome back !!</h2>
        <p className="text-blue-700 font-medium">Build skills for today, tomorrow and beyond</p>
        <i className="text-sky-500 text-sm">Education to make your future bright</i>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold">Email Address<sup className="text-red-600">*</sup></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            onChange={changeHandler}
            value={formData.email}
            className="mt-1 p-2 rounded bg-black text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col relative">
          <label htmlFor="password" className="font-semibold">Password<sup className="text-red-600">*</sup></label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="Enter Password"
            onChange={changeHandler}
            value={formData.password}
            className="mt-1 p-2 rounded bg-black text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <span
            className="absolute right-3 top-9 cursor-pointer text-gray-300 hover:text-white"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
          <div className="text-right text-sm text-blue-600 cursor-pointer mt-1 hover:underline">Forgot Password?</div>
        </div>

        {/* Sign In Button */}
        <button
          onClick={gotoDashboard}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-all duration-300 font-semibold"
        >
          SIGN IN
        </button>

        {/* OR Divider */}
        <div className="flex items-center gap-4">
          <hr className="flex-grow border-black" />
          <span className="text-sm font-semibold">or</span>
          <hr className="flex-grow border-black" />
        </div>

        {/* Google Sign In */}
        <div className="w-full bg-gray-800 text-white flex items-center justify-center py-2 rounded cursor-pointer hover:bg-black transition-all duration-300">
          <FcGoogle className="text-xl mr-2" /> Sign in with Google
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block ml-10">
        <img
          src="https://www.shutterstock.com/image-vector/business-meeting-flat-people-on-600nw-1290353356.jpg"
          alt="Login Illustration"
          className="max-w-sm rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}