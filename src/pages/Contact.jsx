import React from 'react'
import './Contact.css'
import toast from 'react-hot-toast'

export default function Contact() {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" className='.inputs'/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email"  className='.inputs'/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Enter your message"></textarea>
        </div>
        <div className='submitholder' onClick={() => toast.success("Sent successfully")}>
        <button type="submit" className="submit-btn">Send Message</button>
        </div>
      </form>
    </div>
  )
}
