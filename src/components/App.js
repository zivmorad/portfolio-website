import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Intro from './Intro/Intro'
import AboutMe from './AboutMe/AboutMe'
import Skills from './Skills/Skills'

const App=()=>{
    return(
        <div>
            <Navbar/>
            <Intro/>
            <AboutMe/>
            <Skills/>
        </div>
    )
}


export default App;