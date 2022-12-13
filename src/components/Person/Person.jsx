import React from 'react'
import { arrLeft, arrRight, colons } from './assets/svgPerson'
import './person.css'

export default function Person() {
  return (
    <div className='person'>
        <div className='person-slider'>
            <div className='person-slider__arrow'>
                {arrLeft}
            </div>
            <div className='person-slider__main'>
           
                <div className='person-slider__main__img'>
                    
                </div>
                <div className='person-slider__main__txt'>
                {colons}
                Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna<br/> officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.
                </div>
            </div>
            <div className='person-slider__arrow'>
                {arrRight}
            </div>
        </div>
        <div className='person-indication'>
            <div className='person-indication__item'></div>
            <div className='person-indication__item orange'></div>
            <div className='person-indication__item'></div>
        </div>
    </div>
  )
}
