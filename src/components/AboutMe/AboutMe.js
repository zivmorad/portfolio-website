import React, { useEffect } from 'react'
import './AboutMe.css'
import AboutMeContent from './AboutMeContent/AboutMeContent'
import OnMe from './OnMe/OnMe'
import Aos from 'aos'
import 'aos/dist/aos.css'

const AboutMe=()=>{

    useEffect(()=>{
        Aos.init({duration:1500,
            offset: 200});
    },[])

    return(
        <div className='about-me-container' id='about-me' data-aos="fade-right">
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