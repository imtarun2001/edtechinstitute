import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { tutors } from '../TutorsData'
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci"
import { GiCardRandom } from "react-icons/gi"
import { FaExternalLinkAlt } from "react-icons/fa"

export default function Tutors() {
  const [index, setIndex] = useState(0)

  const leftHandler = () => {
    setIndex(prev => (prev <= 0 ? tutors.length - 1 : prev - 1))
  }

  const rightHandler = () => {
    setIndex(prev => (prev >= tutors.length - 1 ? 0 : prev + 1))
  }

  const randomHandler = () => {
    const newIndex = Math.floor(Math.random() * tutors.length)
    setIndex(newIndex)
  }

  return (
    <div className="w-[95%] sm:w-[500px] border border-fuchsia-500 shadow-lg shadow-fuchsia-500 flex flex-col gap-6 items-center p-6 mx-auto bg-white text-black rounded-xl font-['Geist_Mono'] font-semibold">
      
      <h2 className="text-xl text-center">Our Lovable Tutors</h2>

      <img
        src={tutors[index].image}
        alt="Tutor"
        className="h-[150px] w-auto object-cover rounded-md"
      />

      {/* Details & Arrows */}
      <div className="w-full flex justify-between items-center gap-4 px-2">
        <button onClick={leftHandler} className="text-4xl hover:text-blue-600 transition">
          <CiCircleChevLeft />
        </button>

        <div className="flex flex-col text-center gap-1">
          <h3>
            <u>{tutors[index].id}. {tutors[index].name}</u>
          </h3>
          <p><i>Experience: {tutors[index].experience}</i></p>
          <p>Field: {tutors[index].field}</p>
        </div>

        <button onClick={rightHandler} className="text-4xl hover:text-blue-600 transition">
          <CiCircleChevRight />
        </button>
      </div>

      {/* Random Button */}
      <button
        onClick={randomHandler}
        className="border-2 border-white hover:border-blue-600 transition p-2 rounded-md text-2xl"
        title="Random Tutor"
      >
        <GiCardRandom />
      </button>

      {/* Go to Courses */}
      <Link
        to="/topcourses"
        className="text-cyan-400 font-semibold border-2 border-cyan-400 px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:text-blue-600 hover:border-blue-600 transition"
      >
        Go to Courses <FaExternalLinkAlt />
      </Link>
    </div>
  )
}