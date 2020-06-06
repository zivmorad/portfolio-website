import React from 'react';
import './Resume.css'

const Resume=()=>{

    return(
        <div className='resume-container' id='resume'>
            <div className='resume'>
                <h1 className='resume-title'><span>Re</span>sume</h1>
                <h3 className='section-title'> Education:</h3>
                <div className='section'>
                    <p>
                        <strong>2018: </strong> Degree in Computer Science BS.C, HIT Institute of Technology.
                    </p>
                    <ul>
                        <li>
                            Second year in Computer Science degree at HIT.
                        </li>
                        <li>
                            Programming languages: React.js, JavaScript, HTML, CSS, Java, SQL, C++, C.
                        </li>
                    </ul>
                        <p>
                            <strong>2012: </strong>High school diploma – Mekif het Ashdod
                        </p>
                    <ul>
                        <li>
                            Biotechnology, chemistry and biology specialization
                        </li>
                    </ul>
                </div>
                <h3 className='section-title'> Work experience:</h3>
                <div className='section'>
                    <p>
                        <strong> 2017 – present: </strong>Ashdod Energy "EZOM".
                        Licensed security shift supervisor that entails organization and supervision over workers.
                    </p>
                    <br/>
                    <p>
                        <strong>2016 - 2017:</strong> "Israel Electric Company"
                        Facility guard that entails interaction with various groups of people.
                    </p>
                    </div>
                <h3 className='section-title'> Military Service:</h3>
                <div className='section'>
                    <p>
                        <strong>2012-2015:</strong> The 890th Paratroopers battalion
                    </p> 
                    <ul>
                        <li>
                            Honourably discharged as an SSG.
                        </li>
                        <li>
                            Command and lead a unit of 18 combatants in the "Brother’s keeper" and "Protective Edge" operations.
                        </li>
                        <li>
                            Developing responsibility, initiative and solving complex at unpredictable predicaments
                        </li>
                    </ul>
                </div>
                <h3 className='section-title'> Languages:</h3>
                <div className='section'>
                    <p>
                        <strong>English: </strong> Very high,<strong> Hebrew: </strong> Native speaker.
                    </p>
                </div>
            </div>
        </div> 
)}

export default Resume