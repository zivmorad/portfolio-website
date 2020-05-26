import React from 'react'
import './Navbar.css'
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../../img/zivLogo.png'


const Navbar=()=>{
    const scrollToTop = () => {
      scroll.scrollToTop();
    };

    return(
        <div className='nav-container'>
              <img className='home'
                src={logo}
                alt='error'
                onClick={scrollToTop}/>
              <Link className='link'
                activeClass="active"
                to="about-me"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >About Me</Link>
              <Link className='link'
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >Skills</Link>
              <Link className='link'
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >Resume</Link>
              <Link className='link'
                activeClass="active"
                to="contact-me"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >Contact Me</Link>
              <Link className='link'
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >Projects</Link>
        </div>
    )
}

export default Navbar;