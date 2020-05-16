import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Intro from './Intro/Intro'
import AboutMe from './AboutMe/AboutMe'

const App=()=>{
    return(
        <div>
            <Navbar/>
            <Intro/>
            <AboutMe/>
        </div>
    )
}


export default App;