import React, { useState } from 'react'
import Title from '../components/Title'
import Filterbar from '../components/Filterbar'
import Course from '../components/Course'
import { FaExternalLinkAlt } from "react-icons/fa"
import { Link } from 'react-router-dom'

export default function TopCourses({ courses, category, setCategory, filterData }) {
  const [liked, setLiked] = useState([])

  function getCourses() {
    if (category === 'All') {
      let allCourses = []
      Object.values(courses).forEach(array => {
        array.forEach(course => {
          allCourses.push(course)
        })
      })
      return allCourses
    } else {
      return courses[category]
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-6 px-4 py-6 bg-gray-50 font-['Sour_Gummy']">
      {/* Title */}
      <div className="w-full max-w-5xl">
        <Title />
      </div>

      {/* Filterbar + Link */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl gap-4 mt-4">
        <Filterbar filterData={filterData} setCategory={setCategory} />
        <Link
          to="/tutors"
          className="text-cyan-400 border-2 border-cyan-400 font-semibold px-4 py-1 rounded-md flex items-center gap-1 hover:text-blue-600 hover:border-blue-600 transition"
        >
          Go to Tutors <FaExternalLinkAlt />
        </Link>
      </div>

      {/* Courses grid */}
      <div className="w-full max-w-7xl flex flex-wrap justify-center gap-6 mt-4">
        {getCourses().map(course => (
          <Course key={course.id} course={course} liked={liked} setLiked={setLiked} />
        ))}
      </div>
    </div>
  )
}