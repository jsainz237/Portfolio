import React from 'react'
import { Link } from 'react-router-dom'

import './styling/projects.css'
import './styling/gridItems.css'

import arrow from '../assets/designs/arrow.png'
import scMusic from '../assets/designs/scMusic.jpg'
import smokinJoes from '../assets/designs/smokinJoes.png'
import krewella from '../assets/designs/krewella.png'
import euphoria from '../assets/designs/euphoria.png'
//import tenorSquare from '../assets/designs/tenorSquare.jpg'
//import resistance from '../assets/designs/resistance.png'
import lonestarOrange from '../assets/designs/lonestarOrange.jpg'
import healthcareShirt from '../assets/designs/healthcareShirt.png'
import love from '../assets/designs/love.jpg'

const Projects = () => (
    <div className='section-container' style={{ height: 'auto', width: '100vw', backgroundColor: '#85BDBF' }}>
        <div>
            <div className='grid-container'>
                <div className="grid-item" id='arrow' >
                    <img src={arrow} alt="arrow" />
                    <div className="overlay" />
                </div>
                <div className="grid-item" id='SCMusic' >
                    <img src={scMusic} alt="SCMusic" />
                    <div className="overlay" />
                </div>
                <div className="grid-item" id='smokinJoes' >
                    <img src={smokinJoes} alt="smokingJoes" />
                    <div className="overlay" />
                </div>
                <div className="grid-item" id='krewella' >
                    <img src={krewella} alt="krewella" style={{ width: '101%' }}/>
                    <div className="overlay" />
                </div>
                <div className="grid-item" id='euphoria' >
                    <img src={euphoria} alt="euphoria" />
                    <div className="overlay" />
                </div>
                <div className="grid-item" id='love' >
                    <img src={love} alt="love" />
                    <div className="overlay" />
                </div>
                <div className="grid-item" id='lonestarOrange' >
                    <img src={lonestarOrange} alt="lonestarOrange" />
                    <div className="overlay" />
                </div>
                <div className="grid-item" id='healthcareShirt' >
                    <img src={healthcareShirt} alt="healthcareShirt" />
                    <div className="overlay" />
                </div>
            </div> {/* end grid-container */}
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 'auto' }}>
                    <h2 style={{margin: ' 35px 0', textAlign:"center", fontSize: 20, color: '#171717', cursor: 'pointer' }}>
                        <Link to="/designs" id='designsLink'>View More</Link>
                    </h2>
                </div>
            </div>
            
        </div>
        
    </div>
)

export default Projects;