import React from 'react'
import './AboutMe.css'
import AboutMeContent from './AboutMeContent/AboutMeContent'
import OnMe from './OnMe/OnMe'

const AboutMe=()=>{
    return(
        <div className='about-me-container' id='about-me'>
            <h1><span>About</span> Me</h1>
            <div className='about-me-flex'>
                <div className='on-me'>
                   <OnMe/>
                </div>
                <div className='about-me-content'>
                    <AboutMeContent />
                </div>
            </div>
        </div>
    )
}

export default AboutMe;