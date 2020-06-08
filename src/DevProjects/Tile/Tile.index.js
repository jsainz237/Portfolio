import React from 'react';
import { isMobile } from 'react-device-detect';

import './Tile.styles.scss';

export function Tile({ image, title, description, link, linkTitle }) {
    const [showOverlay, setShowOverlay] = React.useState(false);

    return (
        <div className='tile-container'>
            <img src={image} alt="HELLO" className={`tile-img ${showOverlay && !isMobile ? 'blur' : null}`} onMouseEnter={() => setShowOverlay(true)} />
            <div className='tile-overlay' style={{ display: showOverlay ? 'flex' : 'none' }} onMouseLeave={() => setShowOverlay(false)}>
                <p className='tile-title'>{title}</p>
                <p className='tile-description'>{description}</p>
                { link ? <a className="tile-link" target="_blank" href={link}>{linkTitle}</a> : null }
            </div>
        </div>
    );
}