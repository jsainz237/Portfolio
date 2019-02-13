import React from 'react'

import './linkStyling.css'

import { ReactComponent as LinkedInLogo } from '../assets/SVGs/LinkedIn.svg'
import { ReactComponent as GithubLogo } from '../assets/SVGs/Github.svg'
import { ReactComponent as FileIcon } from '../assets/SVGs/fileIcon.svg'

var Links = () => (
    <div id="link-container">
        
        <a className="link" href="https://www.linkedin.com/in/jessesainz/" target='_blank' rel="noopener noreferrer">
            <div style={{ backgroundColor: '#0077B5', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <LinkedInLogo className='icon' />
            </div>
        </a>

        <a className="link" href="https://github.com/jsainz237" target='_blank' rel="noopener noreferrer">
            <div style={{ backgroundColor: '#333', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <GithubLogo className='icon' />
            </div>
        </a>

        <a className="link" href='https://drive.google.com/file/d/1yMpe4X1XLzJ_ECZIaOg85KO-sYqGaQ6i/view?usp=sharing' target='_blank' rel="noopener noreferrer">
            <div style={{ backgroundColor: '#2b5797', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <FileIcon className='icon' />
            </div>
        </a>
    </div>
)

export default Links