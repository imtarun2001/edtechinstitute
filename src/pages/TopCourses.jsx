import React, { useState } from 'react'
import Title from '../components/Title';
import Filterbar from '../components/Filterbar';
import Course from '../components/Course';
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './TopCourses.css'

export default function TopCourses({courses,category,setCategory,filterData}) {

  const [liked,setLiked] = useState([]);

  function getCourses() {
    if(category==='All') {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((course) => {
          allCourses.push(course);
        })
      })
      return allCourses;
    }
    else {
      return courses[category];
    }
  }

  return (
    <div className='topcourses'>
      <div>
        <Title></Title>
      </div>
      <div className='filterbarholder'>
        <Filterbar filterData={filterData} setCategory={setCategory}></Filterbar>
        <div className='gototutors'><Link to='/tutors'>Go to Tutors&nbsp;<FaExternalLinkAlt /></Link></div>
      </div>
      <div className='courseholder'>
        {
          getCourses().map((course) => {
            return <Course key={course.id} course={course} liked={liked} setLiked={setLiked}></Course>
          })
        }
      </div>
    </div>
  )
}
