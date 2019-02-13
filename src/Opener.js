import React from 'react'
import About from './About'
import Tilt from 'react-tilt'

import logoSqaure from './assets/images/logo-sqaure.png'
import logoLetters from './assets/images/logo-letters.png'
import fullLogo from './assets/images/fullLogo.png'
import { isMobile } from 'react-device-detect';

const tiltLogo = (
    <Tilt options={{ max: 20, perspective: 1500, reverse: true }} style={{ transformStyle: 'preserve-3d' }}>
        <div className="tilt-container" style={{ position: 'relative', transformStyle: 'preserve-3d' }}>
            <img src={logoSqaure} alt="" id="logo-sqaure"/>
            <img src={logoLetters} alt="" id="logo-letters" style={{ transform: 'translateZ(30px)'}}/>
        </div>
    </Tilt>
)

const regLogo = (
    <img src={fullLogo} alt="" style={{ maxHeight: '210px', maxWidth: '250px', width: '40vw', height: '33vw'}}/>
)

var Home = () => (
    <div className='section-container' style={{ height: '100vh', width: '100vw', backgroundColor: '#171717'}}>
        <div id='home-content'>
            
            {/* Logo render */}
            <div id='logo'>
                { isMobile ? regLogo : tiltLogo }
            </div>

            <About />
        </div>
    </div>
    
)

export default Home