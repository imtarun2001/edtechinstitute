import React from 'react';
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
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  function gotoCourses() {
    navigate('/topcourses');
  }

  function gotoTutors() {
    navigate('/tutors');
  }

  const iconClass = "text-[25px] mx-2 z-20";

  return (
    <div className="min-h-screen w-[98%] bg-[#002f57] flex flex-col justify-around items-center gap-3 font-['Prosto_One','sans-serif']">
      <div className="w-[90%] flex flex-wrap justify-center items-center gap-5 text-white bg-black shadow-[0_0_20px_white] p-4">
        <div className={`${iconClass} text-blue-600`}><TbBrandCpp /></div>
        <div className={`${iconClass} text-red-600`}><FaJava /></div>
        <div className={`${iconClass} text-yellow-400`}><SiPython /></div>
        <div className={`${iconClass} text-blue-500`}><FaCss3 /></div>
        <div className={`${iconClass} text-pink-700`}><FaHtml5 /></div>
        <div className={`${iconClass} text-green-700`}><FaNode /></div>
        <div className={`${iconClass} text-yellow-300`}><IoLogoJavascript /></div>
        <div className={`${iconClass} text-red-700`}><FaAngular /></div>
        <div className={`${iconClass} text-cyan-400`}><FaReact /></div>
        <div className={`${iconClass} text-blue-600`}><FaDocker /></div>
        <div className={`${iconClass} text-blue-700`}><SiKubernetes /></div>
        <div className={`${iconClass} text-blue-500`}><FaCloud /></div>
        <div className={`${iconClass} text-green-600`}><FaVuejs /></div>
        <div className={`${iconClass} text-cyan-300`}><SiMysql /></div>
        <div className={`${iconClass} text-pink-500`}><GiArtificialIntelligence /></div>
        <div className={`${iconClass} text-green-700`}><SiMicrosoftexcel /></div>

        <div className="text-purple-400 text-center px-6">
          <h2 className="text-2xl font-bold">WELCOME</h2>
          <h3 className="text-lg">to the world of</h3>
          <h2 className="text-2xl font-bold">TECHNOLOGY</h2>
        </div>

      </div>

      <div className="w-4/5 bg-black flex justify-center items-center text-[25px] text-purple-200 p-4 text-center">
        <h3>We upgrade the wanderers to the wonders of tech world</h3>
      </div>

      <div onClick={gotoCourses} className="w-[250px] cursor-pointer underline bg-transparent text-white text-center p-3 hover:text-indigo-400">
        <h3>Courses provided by us <FaExternalLinkAlt className="inline ml-2" /></h3>
      </div>

      <div onClick={gotoTutors} className="w-[270px] cursor-pointer underline bg-transparent text-white text-center p-3 hover:text-indigo-400">
        <h3>Tutors of our organization <FaExternalLinkAlt className="inline ml-2" /></h3>
      </div>
    </div>
  );
}