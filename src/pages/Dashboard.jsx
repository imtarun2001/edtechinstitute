import React from 'react'
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaCloud } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiMicrosoftexcel } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import './Home.css'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

  let navigate = useNavigate();

  function gotoCourses() {
    navigate('/topcourses');
  }

  function gotoTutors() {
    navigate('/tutors');
  }


  return (
    <div className='homepage'>
      <div className='contents welicon'>
          <div className="odd cpp"><TbBrandCpp /></div>
          <div className="even java"><FaJava /></div>
          <div className="odd python"><SiPython /></div>
          <div className="even css"><FaCss3 /></div>
          <div className="odd html"><FaHtml5 /></div>
          <div className="even node"><FaNode /></div>
          <div className="odd js"><IoLogoJavascript /></div>
          <div className="even angular"><FaAngular /></div>

          <div className='welcome'>
            <h2>WELCOME</h2>
            <h3>to the world of</h3>
            <h2>TECHNOLOGY</h2>
          </div>

          <div className="odd react"><FaReact /></div>
          <div className="even docker"><FaDocker /></div>
          <div className="odd kubernetes"><SiKubernetes /></div>
          <div className="even cloud"><FaCloud /></div> 
          <div className="odd vue"><FaVuejs /></div>
          <div className="even mysql"><SiMysql /></div> 
          <div className="odd ai"><GiArtificialIntelligence /></div>
          <div className="even excel"><SiMicrosoftexcel /></div>
      </div>
      <div className='contents weupgrade'><h3>We upgrade the wanderers to the wonders of tech world</h3></div>
      <div className='contents courses' onClick={gotoCourses}><h3>Courses provided by us <FaExternalLinkAlt /></h3></div>
      <div className='contents tutors' onClick={gotoTutors}><h3>Tutors of our organization <FaExternalLinkAlt /></h3></div>
    </div>
  )
}
