import React from 'react'
import { cardLike, cardLoad } from '../Popular/assets/svgPop'
import { phpstorm, procreate, toolbox, zeplin } from './assets/svgNewcom'

import './newcomer.css'


export default function Newcomer() {
  return (
    <div className='newcomer'>
        <div className='newcomer-title'>
            <h3>Newcomer Tools</h3>
            <p>Wow! see the latest update of the most recommended tools from reliable designers and developers</p>
            <button>Explore more</button>
        </div>
        <div className='newcomer-cards'>
        <div className='newcomer-cards__card'>
                <div className='popular-cards__card-container'>
                    <div className='card-title'>
                        {zeplin}
                        <div className='card-title_title'>
                            <h4>Zeplin</h4>
                            <span>Free & Paid</span>
                        </div>
                    </div>
                    <p className='new-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className='cards-icons'>
                        <div className='cards-icons__svg' >
                        <div className='cards-icons__svg__wrap'>{cardLike}</div>
                        <div className='cards-icons__svg__wrap'>{cardLoad}</div>
                        </div>
                        <button>Visit</button>
                    </div>
                </div>
            </div>
            <div className='newcomer-cards__card active'>
                <div className='popular-cards__card-container'>
                    <div className='card-title'>
                        {phpstorm}
                        <div className='card-title_title'>
                            <h4>PHPStorm</h4>
                            <span>Free</span>
                        </div>
                    </div>
                    <p className='new-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className='cards-icons'>
                        <div className='cards-icons__svg' >
                        <div className='cards-icons__svg__wrap'>{cardLike}</div>
                        <div className='cards-icons__svg__wrap'>{cardLoad}</div>
                        </div>
                        <button className='checked'>Visit</button>
                    </div>
                </div>
            </div>
            <div className='newcomer-cards__card'>
                <div className='popular-cards__card-container'>
                    <div className='card-title'>
                        {toolbox}
                        <div className='card-title_title'>
                            <h4>Toolbox</h4>
                            <span>Free</span>
                        </div>
                    </div>
                    <p className='new-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className='cards-icons'>
                        <div className='cards-icons__svg' >
                        <div className='cards-icons__svg__wrap'>{cardLike}</div>
                        <div className='cards-icons__svg__wrap'>{cardLoad}</div>
                        </div>
                        <button>Visit</button>
                    </div>
                </div>
            </div>
            <div className='newcomer-cards__card'>
                <div className='popular-cards__card-container'>
                    <div className='card-title'>
                        {procreate}
                        <div className='card-title_title'>
                            <h4>Procreate</h4>
                            <span>Paid</span>
                        </div>
                    </div>
                    <p className='new-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className='cards-icons'>
                        <div className='cards-icons__svg' >
                        <div className='cards-icons__svg__wrap'>{cardLike}</div>
                        <div className='cards-icons__svg__wrap'>{cardLoad}</div>
                        </div>
                        <button>Visit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
