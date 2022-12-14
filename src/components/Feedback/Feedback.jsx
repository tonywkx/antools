import React from 'react'
import './feedback.css'

export default function Feedback() {
  return (
    <div className='feedback'>
        <div className='feedback-title'>
            <h3>Become a contributor?</h3>
            <p>Join us and get tips & tricks to become a great Designer and Developer</p>
        </div>
        <div className='feedback-input'>
            <input type='text' placeholder='Enter your email...' />
            <button>Join Us</button>
        </div>
    </div>
  )
}
