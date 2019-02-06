import React from 'react';
import './gallery.css'

import { imgObjects } from '../utils/images'
import ImgView from '../Projects/ImgView'

let containerStyle = {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#171717',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center'
}

const GridItem = (props) => (
    <div className='grid-item-gallery' id={props.id} onClick={e => props.showImg(props.src)}>
        <img src={props.src} alt={props.id} />
        <div className="overlay" />
    </div>
)

class Gallery extends React.Component {
    constructor() {
        super();

        this.state = {
            imgIndex: null,
        }
    }

    showImg(imgIndex){
        this.setState({ imgIndex })
    }

    render() {
        return (
            <div style={containerStyle} id="gallery">
                { this.state.imgIndex || this.state.imgIndex === 0 ? <ImgView showImg={this.showImg.bind(this)} index={this.state.imgIndex}/> : null }
                <div className='wrapper'>
                    <h1 style={{ textAlign: 'center', color: '#717171', margin: 0 }}>
                        <span className='blink'>[</span>Graphic Design Creations<span className='blink'>]</span>
                    </h1>
                    <h3 style={{ textAlign: 'center', color: '#4c4c4c', margin: 0, paddingTop: 10 }}>
                        This is most of the artwork I've created over the past 7 years
                    </h3>
                    <div className='grid-container-gallery'>
                        <GridItem src={imgObjects.arrow.url} id="arrow-gallery" showImg={this.showImg.bind(this, imgObjects.arrow.index)} />
                        <GridItem src={imgObjects.scMusic.url} id="SCMusic-gallery" showImg={this.showImg.bind(this, imgObjects.scMusic.index)} />
                        <GridItem src={imgObjects.smokinJoes.url} id="smokinJoes-gallery" showImg={this.showImg.bind(this, imgObjects.smokinJoes.index)} />
                        <GridItem src={imgObjects.krewella.url} id="krewella-gallery" showImg={this.showImg.bind(this, imgObjects.krewella.index)} style={{ width: '101%' }}/>
                        <GridItem src={imgObjects.euphoria.url} id="euphoria-gallery" showImg={this.showImg.bind(this, imgObjects.euphoria.index)} />
                        <GridItem src={imgObjects.love.url} id="love-gallery" showImg={this.showImg.bind(this, imgObjects.love.index)} />
                        <GridItem src={imgObjects.lonestarOrange.url} id="lonestarOrange-gallery" showImg={this.showImg.bind(this, imgObjects.lonestarOrange.index)} />
                        <GridItem src={imgObjects.healthcareShirt.url} id="healthcareShirt-gallery" showImg={this.showImg.bind(this, imgObjects.healthcareShirt.index)} />
                        <GridItem src={imgObjects.mustangMagazine.url} id="mustangMagazine-gallery" showImg={this.showImg.bind(this, imgObjects.mustangMagazine.index)} />
                        <GridItem src={imgObjects.riley.url} id="riley-gallery" showImg={this.showImg.bind(this, imgObjects.riley.index)} />
                        <GridItem src={imgObjects.command.url} id="command-gallery" showImg={this.showImg.bind(this, imgObjects.command.index)} />
                        <GridItem src={imgObjects.jakku.url} id="jakku-gallery" showImg={this.showImg.bind(this, imgObjects.jakku.index)} />
                        <GridItem src={imgObjects.lonestar.url} id="lonestar-gallery" showImg={this.showImg.bind(this, imgObjects.lonestar.index)} />
                        <GridItem src={imgObjects.xgames.url} id="xgames-gallery" showImg={this.showImg.bind(this, imgObjects.xgames.index)} />
                        <GridItem src={imgObjects.resistance.url} id="resistance-gallery" showImg={this.showImg.bind(this, imgObjects.resistance.index)} />
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Gallery