import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';
import './SignUpPage.css'
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {

  const [showPassword,setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false);

  const [formData,setFormData] = useState({
    "fname" : "",
    "lname" : "",
    "email" : "",
    "pass" : "",
    "conpass" : ""
  });

  const navigate = useNavigate();

  function gotoLogIn() {
    if(formData.fname!==""&&formData.lname!==""&&formData.email!==""&&formData.pass!==""&&formData.conpass!=="") {
      if(formData.pass===formData.conpass) {
        navigate('/loginpage');
        toast.success("Account created successfully");
        console.log("Account created successfully")
      }
      else {
        toast.error("Password mismatched");
        console.error("Password mismatched");
      }
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
    <div className='signuppage'>
      <div className='contentsofsignup'>
        <div><h2>Register to be a part of millions who follow their passion...</h2></div>
        <div className='build'>Build skills for today, tomorrow and beyond</div>
        <div><i>Education to make your future bright</i></div>
        


        <div className='nameholder'>
              <div className='fname'>
                <label htmlFor="fname">First Name<sup>*</sup></label>
                <input type="text" name="fname" id="fname" placeholder='Enter First Name' onChange={changeHandler} value={formData.fname}/>
              </div>
              <div className='fname'>
                <label htmlFor="lname">Last Name<sup>*</sup></label>
                <input type="text" name="lname" id="lname"  placeholder='Enter Last Name' onChange={changeHandler} value={formData.lname}/>
              </div>
        </div>

        <div className="emailholder">
          <label htmlFor="email">Email<sup>*</sup></label>
          <input type="email" name="email" id="email" placeholder='Enter Email' onChange={changeHandler} value={formData.email}/>
        </div>

        <div className='passholder'>
              <div className='pass'>
                <label htmlFor="pass">Create a password<sup>*</sup></label>
                <input type={showPassword ? "text" : "password"} name="pass" id="pass" placeholder='Create Password'  onChange={changeHandler} value={formData.pass}/>
                <span onClick={() => setShowPassword(!showPassword)} className='showpassicon'>
                  {
                    showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                  }
                </span>
              </div>
              <div className='pass'>
                <label htmlFor="conpass">Confirm Password<sup>*</sup></label>
                <input type={showConfirmPassword ? "text" : "password"} name="conpass" id="conpass"  placeholder='Enter Password again'  onChange={changeHandler} value={formData.conpass}/>
                <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='showconpassicon'>
                  {
                    showConfirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                  }
                </span>
              </div>
        </div>



        <div className='signinbtn' onClick={gotoLogIn}>SIGN IN</div>
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
        <img src="https://thumbs.dreamstime.com/b/office-teamwork-business-meeting-talking-employees-busy-corporate-cartoon-workers-businessman-team-works-together-115749721.jpg" alt="" height="300px"/>
      </div>
    </div>
  )
}
