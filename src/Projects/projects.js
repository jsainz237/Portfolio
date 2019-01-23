import React from 'react'
import './projects.css'

import arrow from '../assets/designs/arrow.png'
import scMusic from '../assets/designs/scMusic.jpg'
import smokinJoes from '../assets/designs/smokinJoes.png'
import riley from '../assets/designs/riley.png'
import euphoria from '../assets/designs/euphoria.png'

const Projects = () => (
    <div className='section-container' style={{ height: 500, width: '100vw', backgroundColor: '#85BDBF' }}>
        <div className='grid-container'>
            <div className="grid-item" style={{ gridColumn: 1, gridRow: '1 / span 2' }}>
                <img src={arrow} alt="arrow" />
                <div className="overlay" />
            </div>
            <div className="grid-item" style={{ gridColumn: '3 / span 2', gridRow: 1 }}>
                <img src={scMusic} alt="SCMusic" />
                <div className="overlay" />
            </div>
            <div className="grid-item" style={{ gridColumn: '2 / span 2', gridRow: 2 }}>
                <img src={smokinJoes} alt="smokingJoes" />
                <div className="overlay" />
            </div>
            <div className="grid-item" style={{ gridColumn: 2, gridRow: 1}}>
                <img src={riley} alt="damnitsriley" style={{ width: '101%' }}/>
                <div className="overlay" />
            </div>
            <div className="grid-item" style={{ gridColumn: 4, gridRow: 2 }}>
                <img src={euphoria} alt="euphoria" />
                <div className="overlay" />
            </div>
        </div>
    </div>
)

export default Projects;