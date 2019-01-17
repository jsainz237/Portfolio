import React from 'react'

import './linkStyling.css'

import { ReactComponent as LinkedInLogo } from '../assets/SVGs/LinkedIn.svg'
import { ReactComponent as GithubLogo } from '../assets/SVGs/Github.svg'

var Links = () => (
    <div id="link-container">
        
        <a className="link" href="https://google.com">
            <div style={{ backgroundColor: '#0077B5', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <LinkedInLogo style={{ paddingRight: 11 }}/>
            </div>
        </a>

        <a className="link" href="https://google.com">
            <div style={{ backgroundColor: '#333', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <GithubLogo style={{ paddingRight: 11 }}/>
            </div>
        </a>

        <a className="link" href="https://google.com">
            <div style={{ backgroundColor: '#0077B5', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                
            </div>
        </a>
        
        <a className="link" href="https://google.com">
            <div style={{ backgroundColor: '#0077B5', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            
            </div>
        </a>
    </div>
)

export default Links