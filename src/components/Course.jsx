import React from 'react'
import './Course.css'
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import toast from 'react-hot-toast';

export default function Course({course,liked,setLiked}) {

    function likeHandler() {
        if(liked.includes(course.id)) {
            setLiked((prev) => prev.filter(cid => cid!==course.id));
            toast.error("Like removed");
        }
        else {
            if(liked.length===0) {
                setLiked([course.id]);
            }
            else {
                setLiked((prev)=>[...prev,course.id]);
            }
            toast.success("Liked successfully");
        }
    }

  return (
    <div className='course'>
        <div>
            <img src={course.image.url} alt="" height="120px"/>
        </div>
        <div onClick={likeHandler} className='like'>
                {
                    liked.includes(course.id) ? <FcLike /> : <FcLikePlaceholder />
                }
        </div>
        <div>
            <h3>
                {
                    course.title
                }
            </h3>
        </div>
        <div>
            {
                course.description.substr(0,100)
            }
        </div>
    </div>
  )
}
