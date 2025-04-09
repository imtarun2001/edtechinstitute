import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoHome } from "react-icons/io5"
import { RiCustomerService2Fill } from "react-icons/ri"
import { FiLogIn } from "react-icons/fi"
import { FaUserPlus } from "react-icons/fa"
import { RiDashboardHorizontalFill } from "react-icons/ri";

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {

  const navigate = useNavigate()

  function gotoLogInPage() {
    navigate('/loginpage')
  }

  function gotoSignUpPage() {
    navigate('/signuppage')
  }

  function gotoHome() {
    navigate('/')
    setIsLoggedIn(false)
  }

  function gotoContact() {
    navigate('/contact')
  }

  return (
    <nav className="w-full bg-cyan-900 text-white shadow-md p-4 px-6 flex flex-col lg:flex-row items-center justify-between gap-4">
      <div
        onClick={gotoHome}
        className="text-orange-400 bg-indigo-600 text-2xl px-4 py-2 rounded-lg font-bold font-[Sour_Gummy] tracking-wide shadow cursor-pointer hover:scale-105 transition-all"
      >
        EdTechInstitute
      </div>

      <div className="flex gap-4 text-sm sm:text-base items-center">
        <button
          onClick={gotoHome}
          className="flex items-center gap-1 px-4 py-2 rounded-lg bg-purple-600 border border-black hover:bg-purple-800 hover:text-white transition"
        >
          Home <IoHome />
        </button>

        <button
          onClick={gotoContact}
          className="flex items-center gap-1 px-4 py-2 rounded-lg bg-purple-600 border border-black hover:bg-purple-800 hover:text-white transition"
        >
          Contact <RiCustomerService2Fill />
        </button>
      </div>

      <div className="flex gap-3 items-center">
        {!isLoggedIn && (
          <>
            <button
              onClick={gotoLogInPage}
              className="flex items-center gap-1 px-4 py-2 rounded-lg bg-blue-700 border border-black hover:bg-blue-900 transition"
            >
              Login <FiLogIn />
            </button>
            <button
              onClick={gotoSignUpPage}
              className="flex items-center gap-1 px-4 py-2 rounded-lg bg-blue-700 border border-black hover:bg-blue-900 transition"
            >
              Signup <FaUserPlus />
            </button>
          </>
        )}
        {isLoggedIn && (
          <>
            <button
              onClick={gotoHome}
              className="flex items-center gap-1 px-4 py-2 rounded-lg bg-blue-700 border border-black hover:bg-blue-900 transition"
            >
              Logout <FaUserPlus />
            </button>
            <Link
              to="/dashboard"
              className="flex items-center gap-1 px-4 py-2 rounded-lg bg-blue-700 border border-black hover:bg-blue-900 transition"
            >
              Dashboard <RiDashboardHorizontalFill />
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}