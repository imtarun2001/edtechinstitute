import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import toast from 'react-hot-toast'

export default function Course({ course, liked, setLiked }) {

  function likeHandler() {
    if (liked.includes(course.id)) {
      setLiked(prev => prev.filter(cid => cid !== course.id))
      toast.error("Like removed")
    } else {
      setLiked(prev => [...prev, course.id])
      toast.success("Liked successfully")
    }
  }

  return (
    <div className="border border-teal-200 rounded-lg w-[90%] sm:w-[280px] h-[350px] flex flex-col justify-between items-center p-4 m-3 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
      
      {/* Image */}
      <img src={course.image.url} alt={course.title} className="h-[120px] w-auto object-contain" />

      {/* Like button */}
      <button
        onClick={likeHandler}
        className="cursor-pointer w-[35px] h-[35px] flex justify-center items-center border-2 border-pink-600 rounded-full text-xl mt-2 hover:scale-110 transition"
      >
        {liked.includes(course.id) ? <FcLike /> : <FcLikePlaceholder />}
      </button>

      {/* Title */}
      <h3 className="text-lg font-semibold text-center mt-2 px-2">
        {course.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-700 text-center px-2">
        {course.description?.substring(0, 100)}...
      </p>
    </div>
  )
}