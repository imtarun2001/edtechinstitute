import React from 'react'
import './Filterbar.css'

export default function Filterbar({filterData,setCategory}) {

    function filterHandler(title) {
        setCategory(title);
    }

  return (
    <div className='filterbar'>
        {
            filterData.map((option) => {
                return <button key={option.id} className='filterbtn' onClick={() => {filterHandler(option.title)}}>{option.title}</button>
            })
        }
    </div>
  )
}
