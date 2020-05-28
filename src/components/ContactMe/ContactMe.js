import React from 'react'
import './ContactMe.css'
import bg3 from '../../img/bg3.png'
const ContactMe=()=>{
    return(
        <div className='contact-me-container' id='contact-me'>
            <h1 className='contact-title'>Contact<span> Me</span></h1>
            <div className='contact-me'>
                <img src={bg3} alt='error'/>
                <div className='icons'>
                    <div className='section1'>
                        <i className="i location fas fa-map-marker-alt fa-3x"></i>
                        <span>Israel, Ashdod</span>
                        <br/>
                        <i className="i email far fa-envelope fa-3x"></i>
                        <span>moradziv1994@gmail.com</span> 
                    </div>
                    <div className='section2'>
                        <div>
                            <i className='i facebook fab fa-facebook fa-3x' onClick={()=>{window.open('https://www.facebook.com/ziv.morad')}}></i>
                            <i className='i github fab fa-github fa-3x' onClick={()=>{window.open('https://github.com/zivmorad')}}></i>            
                            <i className='i linkedin fab fa-linkedin fa-3x' onClick={()=>{window.open('https://www.linkedin.com/in/ziv-morad-216a6a18a/')}}></i>    
                        </div>
                        <button className='contact-btn'  onClick={() => window.open('https://docdro.id/bh7KNvu')}><i className="btn-icon fas fa-download fa-lg"></i>Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;
                