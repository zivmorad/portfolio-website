import React from 'react'
import './OnMe.css'
import ziv1 from '../../../img/ziv1.jpg'
/* 
            */

const OnMe=()=>{
    return(
        <div className='on-me-container'>
            <div className='pic-continer'>
                <img className='ziv-pic' src={ziv1} alt='error'/>
                <div className='pic-content'>
                <h5 className='pic-name'>Ziv Morad</h5>
                <span>front end developer</span>
                </div>
            </div>
                <h4 className='about-me-h4'>About me</h4>
            <div className='on-me-content'>
                <p><strong>Name:</strong> Ziv Morad</p>
                <p><strong>Age:</strong> 26</p>
                <p><strong>Institue:</strong> Holon Institue Of Technolog</p>
                <p><strong>Bachelor's Degree:</strong> Computer Science</p>
                <p><strong>Location:</strong> Israel, Ashdod</p>
            </div>
        </div>
    )
}

export default OnMe;