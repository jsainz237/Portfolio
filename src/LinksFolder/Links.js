import React from 'react'

import './linkStyling.css'

import { ReactComponent as LinkedInLogo } from '../assets/SVGs/LinkedIn.svg'
import { ReactComponent as GithubLogo } from '../assets/SVGs/Github.svg'
import { ReactComponent as FileIcon } from '../assets/SVGs/fileIcon.svg'

var Links = () => (
    <div id="link-container">
        
        <a className="link" href="https://www.linkedin.com/in/jessesainz/" target='_blank'>
            <div style={{ backgroundColor: '#0077B5', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <LinkedInLogo className='icon' />
            </div>
        </a>

        <a className="link" href="https://github.com/jsainz237" target='_blank'>
            <div style={{ backgroundColor: '#333', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <GithubLogo className='icon' />
            </div>
        </a>

        <a className="link" href='https://drive.google.com/file/d/14N-n8XnGk1P1M3I6ZtRZcqg2eJj28bGv/view?usp=sharing' target='_blank'>
            <div style={{ backgroundColor: '#2b5797', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <FileIcon className='icon' />
            </div>
        </a>
    </div>
)

export default Links