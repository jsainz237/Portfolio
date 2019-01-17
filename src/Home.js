import React from 'react'
import About from './About'
import Tilt from 'react-tilt'

import logoSqaure from './assets/images/logo-sqaure.png'
import logoLetters from './assets/images/logo-letters.png'

var Home = () => (
    <div className='section-container' style={{ backgroundColor: '#171717'}}>
        <div style={{ height: 'auto' }}>
            
            {/* Logo render */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Tilt options={{ max: 20, perspective: 1500, reverse: true }} style={{ transformStyle: 'preserve-3d'}}>
                    <div className="tilt-container" style={{ position: 'relative', transformStyle: 'preserve-3d' }}>
                        <img src={logoSqaure} alt="logo-square" id="logo-sqaure"/>
                        <img src={logoLetters} alt="logo-letters" id="logo-letters" style={{ transform: 'translateZ(30px)'}}/>
                    </div>
                </Tilt>
            </div>

            <About />
        </div>
    </div>
    
)

export default Home