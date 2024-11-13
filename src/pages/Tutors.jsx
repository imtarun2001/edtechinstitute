import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { tutors } from '../TutorsData'
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { GiCardRandom } from "react-icons/gi";
import { FaExternalLinkAlt } from "react-icons/fa";
import './Tutors.css'

export default function Tutors() {

  const [index,setIndex] = useState(0);

  function leftHandler() {
    if(index<=0) {
      setIndex(tutors.length-1);
    }
    else {
      setIndex(index-1);
    }
  }

  function randomHandler() {
    let newIndex = Math.floor(Math.random()*tutors.length);
    setIndex(newIndex);
  }

  function rightHandler() {
    if(index>=tutors.length-1) {
      setIndex(0);
    }
    else {
      setIndex(index+1);
    }
  }

  return (
    <div className='tutor'>
      <div className='tutortitle'>
          Our Lovable Tutors
      </div>
      <div>
        <img src={tutors[index].image} alt="" height="150px"/>
      </div>

      <div className='btnanddetailsholder'>

        <div className='btns' onClick={leftHandler}>
        <CiCircleChevLeft />
        </div>

        <div className='contentsholder'>
          <div>
            <h3>
              <u>
                {
                  tutors[index].id+". "+tutors[index].name
                }
              </u>
            </h3>
          </div>
          <div>
            <i>
              {
                "Experience : "+tutors[index].experience
              }
            </i>
          </div>
          <div>
            {
              "Field of teaching : "+tutors[index].field
            }
          </div>
        </div>

        <div className='btns' onClick={rightHandler}>
          <CiCircleChevRight />
        </div>
      </div>

      <div className='btns random' onClick={randomHandler}>
            <GiCardRandom />
      </div>
      
      <div className='gotocourses'><Link to='/topcourses'>Go to Courses &nbsp;<FaExternalLinkAlt /></Link></div>

    </div>
  )
}
