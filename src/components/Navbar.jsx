import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa";

export default function Navbar({isLoggedIn,setIsLoggedIn}) {

  let navigate = useNavigate();

  function gotoLogInPage() {
    navigate('/loginpage');
  }

  function gotoSignUpPage() {
    navigate('/signuppage');
  }

  function gotoHome() {
    navigate('/');
    setIsLoggedIn(false);
  }

  function gotocontact() {
    navigate('/contact');
  }

  return (
    <div className='navbar'>
      <div className='edtechinstitute' onClick={gotoHome}>EdTechInstitute</div>
      <div className='homecontactcontainer'>
        <div className='home' onClick={gotoHome}>Home <IoHome /></div>
        <div className='contact' onClick={gotocontact}>Contact <RiCustomerService2Fill /></div>
      </div>
      <div className='loginsignupcontainer'>
        {!isLoggedIn && <button className='login' onClick={gotoLogInPage}>Login <FiLogIn /></button>}
        {!isLoggedIn && <button className='signup' onClick={gotoSignUpPage}>Signup <FaUserPlus /></button>}
        {isLoggedIn && <button className='logout' onClick={gotoHome}>Logout <FaUserPlus /></button>}
        {isLoggedIn && <button className='dashboard'><Link to='/dashboard'>Dashboard <FaUserPlus /></Link></button>}
      </div>
    </div>
  )
}
