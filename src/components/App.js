import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Intro from './Intro/Intro'
import AboutMe from './AboutMe/AboutMe'
import Skills from './Skills/Skills'
import ContactMe from './ContactMe/ContactMe'

const App=()=>{
    return(
        <div>
            <Navbar/>
            <Intro/>
            <AboutMe/>
            <Skills/>
            <ContactMe/>
        </div>
    )
}


export default App;