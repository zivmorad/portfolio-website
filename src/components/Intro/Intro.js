import React from 'react'
import './Intro.css'
import zivPic from '../../img/ziv.jpg'

const Intro=()=>{
    return(
        <div id='intro'>
            <div className='intro-container'>
                <img className='intro-img' src={zivPic} alt='error'/>
                <h1 className='intro-title'>Hi, I am <strong> Ziv Morad</strong></h1>
                <p className='intro-subtitle'>Front-End Developer</p>
            </div>
        </div>
    )
}

export default Intro;