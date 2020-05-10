import React from 'react';

import './Tile.styles.css';

export function Tile({ image, title, description, link, linkTitle }) {
    const [showOverlay, setShowOverlay] = React.useState(false);

    return (
        <div className='tile-container'>
            <img src={image} alt="HELLO" style={{ filter: showOverlay ? 'blur(10px)' : null }} className='tile-img' onMouseEnter={() => setShowOverlay(true)} />
            <div className='tile-overlay' style={{ display: showOverlay ? 'flex' : 'none' }} onMouseLeave={() => setShowOverlay(false)}>
                <p className='tile-title'>{title}</p>
                <p className='tile-description'>{description}</p>
                { link ? <a className="tile-link" href={link}>{linkTitle}</a> : null }
            </div>
        </div>
    );
}