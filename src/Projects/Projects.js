import React from 'react'
import './projects.css'

import arrow from '../assets/designs/arrow.png'

const Projects = () => (
    <div className='section-container' style={{ height: 500, width: '100vw', backgroundColor: '#85BDBF' }}>
        <div className='grid-container'>
            <div className="grid-item item1"><img style={{ height: '100%', width: '100%', objectFit: 'cover'}} src={arrow} alt="Arrow.png" /></div>
            <div className="grid-item"><img src alt /></div>
            <div className="grid-item"><img src alt /></div>
            <div className="grid-item"><img src alt /></div>
            <div className="grid-item"><img src alt /></div>
            <div className="grid-item"><img src alt /></div>
            <div className="grid-item"><img src alt /></div>
        </div>
    </div>
)

export default Projects;