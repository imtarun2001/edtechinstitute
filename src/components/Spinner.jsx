import React from 'react'
import './Spinner.css'

export default function Spinner() {
  return (
    <div className='spin'>
        <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <h3>
            Loading...
        </h3>
    </div>
  )
}
