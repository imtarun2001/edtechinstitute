import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function SignUpPage({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [showConPass, setShowConPass] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  function changeHandler(e) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  function handleSignUp() {
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.password &&
      formData.confirmPassword
    ) {
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      toast.success("Account created successfully");
      setIsLoggedIn(true);
      navigate('/dashboard');
    } else {
      toast.error("Please fill all fields");
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-evenly bg-yellow-100 font-['Sour_Gummy'] p-4">
      <div className="w-full max-w-md bg-yellow-300 text-black p-6 rounded-md shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-center">Create your account</h2>

        {/* Name Fields */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              className="p-2 border border-black rounded bg-black text-white"
              onChange={changeHandler}
              value={formData.firstName}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              className="p-2 border border-black rounded bg-black text-white"
              onChange={changeHandler}
              value={formData.lastName}
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            className="p-2 border border-black rounded bg-black text-white"
            onChange={changeHandler}
            value={formData.email}
          />
        </div>

        {/* Password Fields */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full relative">
            <label htmlFor="password">Password</label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="p-2 border border-black rounded bg-black text-white"
              onChange={changeHandler}
              value={formData.password}
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 bottom-2 text-gray-300 cursor-pointer hover:text-white"
            >
              {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>
          <div className="flex flex-col w-full relative">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type={showConPass ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              className="p-2 border border-black rounded bg-black text-white"
              onChange={changeHandler}
              value={formData.confirmPassword}
            />
            <span
              onClick={() => setShowConPass(!showConPass)}
              className="absolute right-3 bottom-2 text-gray-300 cursor-pointer hover:text-white"
            >
              {showConPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>
        </div>

        {/* Sign Up Button */}
        <div
          onClick={handleSignUp}
          className="w-full bg-black text-white py-2 rounded cursor-pointer text-center hover:bg-gray-900 transition"
        >
          SIGN UP
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2 my-2">
          <div className="flex-grow h-px bg-black"></div>
          <span className="text-sm">or</span>
          <div className="flex-grow h-px bg-black"></div>
        </div>

        {/* Google Signup */}
        <div className="flex items-center justify-center gap-2 bg-gray-700 text-white py-2 rounded cursor-pointer hover:bg-black transition">
          <FcGoogle className="text-xl" /> Sign up with Google
        </div>
      </div>

      {/* Optional image or visual */}
      <div className="hidden md:block mt-10 md:mt-0">
        <img
          src="https://www.shutterstock.com/image-vector/business-meeting-flat-people-on-600nw-1290353356.jpg"
          alt="Illustration"
          className="max-w-md rounded shadow-lg"
        />
      </div>
    </div>
  );
}