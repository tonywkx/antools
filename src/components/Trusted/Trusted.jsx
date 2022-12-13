import React from 'react'
import { google, slack, microsoft, wp } from './assets/svgTrusted'
import './trusted.css'

export default function Trusted() {
  return (
    <div className='trusted'>
        {/* <div className='circle'></div> */}
        <div className='trusted-wrap'>
            <p>Trusted more than 150+ brand</p>
            <div className='trusted-wwrap__svg'>
                {microsoft}
                {google}
                {slack}
                {wp}
            </div>
        </div>
    </div>
  )
}
