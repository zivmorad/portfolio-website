import React, { Component } from 'react'
import './Projects.css'
import img1 from '../../img/item1.jpg'
import img2 from '../../img/item2.jpg'
import img3 from '../../img/item3.jpg'
import img4 from '../../img/item4.jpg'
import img5 from '../../img/item5.jpg'
import img6 from '../../img/item6.jpg'

class Projects extends Component{
    
    state={projects:[{projectName:'Portfolio Website',programLanguage:'React, Css',url:'https://github.com/zivmorad/protfolio-web',src:img1},
                     {projectName:'Movie Search', programLanguage:'React, Redux, css',url:'https://github.com/zivmorad/movie-search',src:img2},
                     {projectName:'Youtube Project',programLanguage:'React, Css' ,url:'https://github.com/zivmorad/youtube-project',src:img3},
                     {projectName:'Hotel Website',programLanguage:'React, Css' ,url:'https://github.com/zivmorad/Hotel-website',src:img4},
                     {projectName:'Validation Project',programLanguage:'Javascript, Bootstrap' ,url:'https://github.com/zivmorad/Validation-Project',src:img5},
                     {projectName:'Task List',programLanguage:'Javascript, Bootstrap' ,url:'https://github.com/zivmorad/Task-List',src:img6}]}

    renderProjects=()=>{
        return this.state.projects.map((project,index)=>{
            return(
                <div className='item' key={index} onClick={()=>{window.open(project.url)}}>
                    <div className='item-img'>
                        <img src={project.src} alt='error'/>
                    </div>
                    <div className='item-text'>
                        <div className='item-text-warp'>
                            <h2 className='item-text-project-name'>{project.projectName}</h2>
                            <p className='item-text-program-language'>{project.programLanguage}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render(){

        return(
            <div className='project-container' id='projects'>
                <h1 className='projects-title'><span>M</span>y <span>P</span>rojects</h1>
                <div className='items'>
                    {this.renderProjects()}
                </div>
            </div>
        )
    }
}

export default Projects;