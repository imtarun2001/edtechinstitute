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
import toast from 'react-hot-toast';

export default function Home({ isLoggedIn }) {
  const navigate = useNavigate();

  const gotoCourses = () => {
    if (isLoggedIn) {
      navigate('/topcourses');
    } else {
      toast.error("Log in first");
      navigate('/loginpage');
    }
  };

  const gotoTutors = () => {
    if (isLoggedIn) {
      navigate('/tutors');
    } else {
      toast.error("Log in first");
      navigate('/loginpage');
    }
  };

  const techIcons = [
    { icon: <TbBrandCpp />, className: 'text-blue-600' },
    { icon: <FaJava />, className: 'text-red-600' },
    { icon: <SiPython />, className: 'text-yellow-400' },
    { icon: <FaCss3 />, className: 'text-blue-500' },
    { icon: <FaHtml5 />, className: 'text-pink-700' },
    { icon: <FaNode />, className: 'text-green-700' },
    { icon: <IoLogoJavascript />, className: 'text-yellow-300' },
    { icon: <FaAngular />, className: 'text-orange-700' },
    { icon: <FaReact />, className: 'text-cyan-400' },
    { icon: <FaDocker />, className: 'text-blue-800' },
    { icon: <SiKubernetes />, className: 'text-blue-700' },
    { icon: <FaCloud />, className: 'text-blue-500' },
    { icon: <FaVuejs />, className: 'text-green-500' },
    { icon: <SiMysql />, className: 'text-cyan-600' },
    { icon: <GiArtificialIntelligence />, className: 'text-purple-600' },
    { icon: <SiMicrosoftexcel />, className: 'text-green-600' },
  ];

  return (
    <div className="min-h-screen w-full bg-[#002f57] flex flex-col items-center justify-center gap-8 px-4 py-8">
      <div className="w-full max-w-6xl flex flex-wrap justify-center items-center gap-4 p-4 bg-black shadow-md rounded-xl">
        {techIcons.map((tech, index) => (
          <div
            key={index}
            className={`text-3xl md:text-5xl ${tech.className}`}
          >
            {tech.icon}
          </div>
        ))}
        <div className="text-center text-white px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-400">WELCOME</h2>
          <h3 className="text-lg md:text-xl font-medium">to the world of</h3>
          <h2 className="text-2xl md:text-3xl font-bold text-purple-400">TECHNOLOGY</h2>
        </div>
      </div>

      <div className="text-center px-4 max-w-3xl text-lg md:text-xl text-indigo-300 font-bold font-[Prosto One]">
        We upgrade the wanderers to the wonders of tech world
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <button
          onClick={gotoCourses}
          className="px-6 py-3 bg-transparent text-indigo-300 border border-indigo-400 hover:text-indigo-100 hover:border-white rounded-lg text-lg flex items-center gap-2 transition duration-300"
        >
          Courses provided by us <FaExternalLinkAlt />
        </button>

        <button
          onClick={gotoTutors}
          className="px-6 py-3 bg-transparent text-indigo-300 border border-indigo-400 hover:text-indigo-100 hover:border-white rounded-lg text-lg flex items-center gap-2 transition duration-300"
        >
          Tutors of our organization <FaExternalLinkAlt />
        </button>
      </div>
    </div>
  );
}