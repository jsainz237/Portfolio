import React from 'react';
import './gallery.css'

import arrow from '../assets/designs/arrow.png'
import scMusic from '../assets/designs/scMusic.jpg'
import smokinJoes from '../assets/designs/smokinJoes.png'
import krewella from '../assets/designs/krewella.png'
import euphoria from '../assets/designs/euphoria.png'
//import tenorSquare from '../assets/designs/tenorSquare.jpg'
import resistance from '../assets/designs/resistance.png'
import riley from '../assets/designs/riley.png'
import lonestarOrange from '../assets/designs/lonestarOrange.jpg'
import healthcareShirt from '../assets/designs/healthcareShirt.png'
import love from '../assets/designs/love.jpg'
import mustangMagazine from '../assets/designs/mustang.jpg'
import command from '../assets/designs/command.png'
import catHat from '../assets/designs/catHat.png'
import jakku from '../assets/designs/jakku.png'
import lonestar from '../assets/designs/lonestar.png'
//import poof from '../assets/designs/poof.png'
import xgames from '../assets/designs/xgames.jpg'

let containerStyle = {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#171717',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center'
}

const Gallery = () => (
    <div style={containerStyle}>
        <div>
            <div className='grid-container-gallery'>
                <div className="grid-item-gallery" id='arrow-gallery' >
                    <img src={arrow} alt="arrow" />
                    <div className="overlay" />
                </div>
                <div className="grid-item-gallery" id='SCMusic-gallery' >
                    <img src={scMusic} alt="SCMusic" />
                    <div className="overlay" />
                </div>
                <div className="grid-item-gallery" id='smokinJoes-gallery' >
                    <img src={smokinJoes} alt="smokingJoes" />
                    <div className="overlay" />
                </div>
                <div className="grid-item-gallery" id='krewella-gallery' >
                    <img src={krewella} alt="krewella" style={{ width: '101%' }}/>
                    <div className="overlay" />
                </div>
                <div className="grid-item-gallery" id='euphoria-gallery' >
                    <img src={euphoria} alt="euphoria" />
                    <div className="overlay" />
                </div>
                <div className="grid-item-gallery" id='love-gallery' >
                    <img src={love} alt="love" />
                    <div className="overlay" />
                </div>
                <div className="grid-item-gallery" id='lonestarOrange-gallery' >
                    <img src={lonestarOrange} alt="lonestarOrange" />
                    <div className="overlay" />
                </div>
                <div className="grid-item-gallery" id='healthcareShirt-gallery' >
                    <img src={healthcareShirt} alt="healthcareShirt" />
                    <div className="overlay" />
                </div>
                <div className="grid-item-gallery" id='mustangMagazine-gallery' >
                    <img src={mustangMagazine} alt="mustangMagazine" />
                    <div className="overlay" />
                </div>
                <div className="grid-item-gallery" id='riley-gallery' >
                    <img src={riley} alt="riley" />
                    <div className="overlay" />
                </div>
                <div className="grid-item-gallery" id='command-gallery' >
                    <img src={command} alt="command" />
                    <div className="overlay" />
                </div>
                <div className="grid-item-gallery" id='jakku-gallery' >
                    <img src={jakku} alt="jakku" />
                    <div className="overlay" />
                </div>
                <div className="grid-item-gallery" id='lonestar-gallery' >
                    <img src={lonestar} alt="lonestar" />
                    <div className="overlay" />
                </div>
                <div className="grid-item-gallery" id='xgames-gallery' >
                    <img src={xgames} alt="xgames" />
                    <div className="overlay" />
                </div>
                <div className="grid-item-gallery" id='resistance-gallery' >
                    <img src={resistance} alt="resistance" />
                    <div className="overlay" />
                </div>
            </div>
        </div>
    </div>
)

export default Gallery