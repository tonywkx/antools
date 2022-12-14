import React from 'react'
import './footer.css'
import { logoMini } from './svgFooter'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <div className='footer-logo__img'>
                {logoMini}
                <p>antools.</p>
            </div>
            <span className='bold'>Copyright 2021. Antools</span>
            <span>Antool is a web collection of information on paid or free Design and Development tools</span>
        </div>
        <div className='footer-about'>
            <div className='footer-about__contact'>
                <p>Contact Us</p>
                <ul>
                    <li>+621987463</li>
                    <li>M Building, No.10 A</li>
                    <li>antools@awesome.com</li>
                </ul>
            </div>
            <div className='footer-about__categories'>
                <p>Categories</p>
                <ul>
                    <li>Design</li>
                    <li>Development</li>
                </ul>
            </div>
            <div className='footer-about__company'>
                <p>Company Info</p>
                <ul>
                    <li>About Us</li>
                    <li>Our Partners</li>
                    <li>Blog</li>
                </ul>
            </div>
        </div>
    </div>
  )
}