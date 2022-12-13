import React from 'react'
import './popular.css'
import { cardLike, cardLoad, figma, invision, notion, redLike, sketch, slack, vscode } from '../../svg'

export default function Popular() {
  return (
    <div className='popular'>
        <div className='popular-title'>
            <h3>Most Popular Tools</h3>
            <p>Tools for the best Designers and Developers <br/>
                most popularly used in the world</p>
        </div>
        <div className='popular-cards'>
    
            <div className='popular-cards__card'>
                <div className='popular-cards__card-container'>
                    <div className='card-title'>
                        {figma}
                        <div className='card-title_title'>
                            <h4>FIGMA</h4>
                            <span>Free</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className='cards-icons'>
                        <div className='cards-icons__svg' >
                        <div className='cards-icons__svg__wrap'>{cardLike}</div>
                        <div className='cards-icons__svg__wrap'>{cardLoad}</div>
                        </div>
                        <button>Visit</button>
                    </div>
                </div>
            </div>
            <div className='popular-cards__card hover'>
                <div className='popular-cards__card-container'>
                    <div className='card-title'>
                        {sketch}
                        <div className='card-title_title'>
                            <h4>Sketch</h4>
                            <span>Trial & Paid</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className='cards-icons'>
                        <div className='cards-icons__svg'>
                        <div className='like-hover'>{redLike}</div>
                        <div className='cards-icons__svg__wrap'>{cardLoad}</div>
                        </div>
                        <button className='checked'>Visit</button>
                    </div>
                </div>
            </div>
            <div className='popular-cards__card'>
            <div className='popular-cards__card-container'>
                    <div className='card-title'>
                        {vscode}
                        <div className='card-title_title'>
                            <h4>Visual Studio Code</h4>
                            <span>Free</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
        <div className='popular-cards'>
            <div className='popular-cards__card'>
            <div className='popular-cards__card-container'>
                    <div className='card-title'>
                        {notion}
                        <div className='card-title_title'>
                            <h4>Notion</h4>
                            <span>Free & Paid</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className='cards-icons'>
                        <div className='cards-icons__svg' >
                        <div className='cards-icons__svg__wrap'>{cardLike}</div>
                        <div className='cards-icons__svg__wrap'>{cardLoad}</div>
                        </div>
                        <button>Visit</button>
                    </div>
                </div>
            </div>
            <div className='popular-cards__card'>
            <div className='popular-cards__card-container'>
                    <div className='card-title'>
                        {slack}
                        <div className='card-title_title'>
                            <h4>Slack</h4>
                            <span>Free & Paid</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className='cards-icons'>
                        <div className='cards-icons__svg' >
                        <div className='cards-icons__svg__wrap'>{cardLike}</div>
                        <div className='cards-icons__svg__wrap'>{cardLoad}</div>
                        </div>
                        <button>Visit</button>
                    </div>
                </div>
            </div>
            <div className='popular-cards__card'>
            <div className='popular-cards__card-container'>
                    <div className='card-title'>
                        {invision}
                        <div className='card-title_title'>
                            <h4>Invision</h4>
                            <span>Free & Paid</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
        <button className='load-button'>Load more</button>
    </div>
  )
}