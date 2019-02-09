import React from 'react'
import { Link } from 'react-router-dom'

import './styling/projects.css'
import './styling/GridItems/gridItems.css'

import ImgView from './ImgView'
import { LargeGallery, SmallGallery } from './Gallery';


class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            imgIndex: null,
            showFullGallery: false,
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
                    { this.state.showFullGallery ? <LargeGallery showImg={this.showImg.bind(this)}/> : <SmallGallery showImg={this.showImg.bind(this)} /> }
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: 'auto' }}>
                            { this.state.showFullGallery ? 
                                <h1 className='GalleryButton' onClick={ e => this.setState({ showFullGallery: false })}>View Less</h1> : 
                                <h1 className='GalleryButton' onClick={ e => this.setState({ showFullGallery: true }) }>View More</h1> 
                            }
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
    
    
}

export default Projects;