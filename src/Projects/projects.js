import React from 'react'
import { Link } from 'react-router-dom'

import './styling/projects.css'
import './styling/gridItems.css'

import { imgObjects } from '../utils/images'
import ImgView from './ImgView'

const GridItem = (props) => (
    <div className="grid-item" id={props.id} onClick={e => props.showImg(props.src)}>
        <img src={props.src} alt="" />
        <div className="overlay" />
    </div>
)

class Projects extends React.Component {
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
        //console.log(this.state)
        return(
            <div className='section-container' style={{ height: 'auto', width: '100vw', backgroundColor: '#85BDBF' }}>
                { this.state.imgIndex || this.state.imgIndex === 0 ? <ImgView showImg={this.showImg.bind(this)} index={this.state.imgIndex}/> : null }
                <div style={{ maxWidth: '80vw'}}>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0 -15px 0'}}>
                        <h1 style={{ margin: 0, textAlign: 'center', color: '#171717', borderBottom: '3px solid #171717', padding: '5px 20px', fontSize: 20 }}>
                            Designs
                        </h1>
                    </div>
                    <div className='grid-container'>
                        {/* using array to set up for going to next picture from ImgView */}
                        <GridItem id="arrow" src={imgObjects.arrow.url} showImg={this.showImg.bind(this, imgObjects.arrow.index)} />
                        <GridItem id="SCMusic" src={imgObjects.scMusic.url} showImg={this.showImg.bind(this, imgObjects.scMusic.index)} />
                        <GridItem id="smokinJoes" src={imgObjects.smokinJoes.url} showImg={this.showImg.bind(this, imgObjects.smokinJoes.index)} />
                        <GridItem id="krewella" src={imgObjects.krewella.url} showImg={this.showImg.bind(this, imgObjects.krewella.index)} style={{ width: '101%' }}/>
                        <GridItem id="euphoria" src={imgObjects.euphoria.url} showImg={this.showImg.bind(this, imgObjects.euphoria.index)} />
                        <GridItem id="love" src={imgObjects.love.url} showImg={this.showImg.bind(this, imgObjects.love.index)} />
                        <GridItem id="lonestarOrange" src={imgObjects.lonestarOrange.url} showImg={this.showImg.bind(this, imgObjects.lonestarOrange.index)} />
                        <GridItem id="healthcareShirt" src={imgObjects.healthcareShirt.url} showImg={this.showImg.bind(this, imgObjects.healthcareShirt.index)} />
                    </div> {/* end grid-container */}
                    
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: 'auto' }}>
                            <h2 style={{margin: ' 35px 0', textAlign:"center", fontSize: 20, color: '#171717', cursor: 'pointer' }}>
                                <Link to="/designs" id='designsLink'>View More</Link>
                            </h2>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
    
    
}

export default Projects;