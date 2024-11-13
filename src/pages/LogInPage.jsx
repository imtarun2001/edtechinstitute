import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import './LogInPage.css'

export default function LogInPage({setIsLoggedIn}) {

  const navigate = useNavigate();
  
  const [showPassword,setShowPassword] = useState(false);
  const [formData,setFormData] = useState({
    "email" : "",
    "password" : ""
  })

  function gotoDashboard() {
    if(formData.email!=="" && formData.password!=="") {
      navigate('/dashboard');
      setIsLoggedIn(true);
      toast.success("Welcome to the dashboard");
      toast.success("Logged in")
      console.log("Logged in");
    }
    else {
      toast.error("Fill all the required fields");
      console.warn("Fill all the required fields");
    }
  }

  function changeHandler(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name] : event.target.value
      }
    })
  }

  return (
    <div className='loginpage'>
      <div className='content'>
        <div><h2>Welcome back !!</h2></div>
        <div className='build'>Build skills for today, tomorrow and beyond</div>
        <div><i>Education to make your future bright</i></div>
        <div className='email'>
          <label htmlFor="email">Email Address<sup>*</sup></label>
          <input type="email" name="email" id="email" placeholder='Enter Email' onChange={changeHandler} value={formData.email}/>
        </div>
        <div className='password'>
          <label htmlFor="">Password<sup>*</sup></label>
          <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder='Enter Password' onChange={changeHandler} value={formData.password}/>
          <span onClick={() => setShowPassword(!showPassword)} className='showpassiconlogin'>
            {
              showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
            }
          </span>
          <div className='forgot'>Forgot Password</div>
        </div>
        <div className='signinbtn' onClick={gotoDashboard}>SIGN IN</div>
        <div className='or'>
          <div></div>
          <p>or</p>
          <div></div>
        </div>
        <div className='signinbtngoogle'>
        <FcGoogle /> &nbsp;Sign in with Google
        </div>
      </div>
            
      <div>
        <img src="https://www.shutterstock.com/image-vector/business-meeting-flat-people-on-600nw-1290353356.jpg" alt=""  height="300px"/>
      </div>
    </div>
  )
}
