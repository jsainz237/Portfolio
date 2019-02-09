import React from 'react';
import { imgObjects } from '../utils/images'

import './styling/GridItems/gridItems.css'
import './styling/GridItems/gallery.css'

const LargeGridItem = (props) => (
    <div className='grid-item-large' id={props.id} onClick={e => props.showImg(props.src.index)}>
        <img src={props.src.url} alt={props.id} />
        <div className="overlay" />
    </div>
)

const SmallGridItem = (props) => (
    <div className="grid-item" id={props.id} onClick={e => props.showImg(props.src.index)}>
        <img src={props.src.url} alt="" />
        <div className="overlay" />
    </div>
)

const LargeGallery = (props) => (
    <div className='grid-container-large'>
        <LargeGridItem src={imgObjects.arrow} id="arrow-large" showImg={props.showImg} />
        <LargeGridItem src={imgObjects.scMusic} id="SCMusic-large" showImg={props.showImg} />
        <LargeGridItem src={imgObjects.smokinJoes} id="smokinJoes-large" showImg={props.showImg} />
        <LargeGridItem src={imgObjects.krewella} id="krewella-large" showImg={props.showImg} style={{ width: '101%' }}/>
        <LargeGridItem src={imgObjects.euphoria} id="euphoria-large" showImg={props.showImg} />
        <LargeGridItem src={imgObjects.love} id="love-large" showImg={props.showImg} />
        <LargeGridItem src={imgObjects.lonestarOrange} id="lonestarOrange-large" showImg={props.showImg} />
        <LargeGridItem src={imgObjects.healthcareShirt} id="healthcareShirt-large" showImg={props.showImg} />
        <LargeGridItem src={imgObjects.mustangMagazine} id="mustangMagazine-large" showImg={props.showImg} />
        <LargeGridItem src={imgObjects.riley} id="riley-large" showImg={props.showImg} />
        <LargeGridItem src={imgObjects.command} id="command-large" showImg={props.showImg} />
        <LargeGridItem src={imgObjects.jakku} id="jakku-large" showImg={props.showImg} />
        <LargeGridItem src={imgObjects.lonestar} id="lonestar-large" showImg={props.showImg} />
        <LargeGridItem src={imgObjects.xgames} id="xgames-large" showImg={props.showImg} />
        <LargeGridItem src={imgObjects.resistance} id="resistance-large" showImg={props.showImg} />
    </div>

)

const SmallGallery = (props) => (
    <div className='grid-container'>
        <SmallGridItem id="arrow" src={imgObjects.arrow} showImg={props.showImg} />
        <SmallGridItem id="SCMusic" src={imgObjects.scMusic} showImg={props.showImg} />
        <SmallGridItem id="smokinJoes" src={imgObjects.smokinJoes} showImg={props.showImg} />
        <SmallGridItem id="krewella" src={imgObjects.krewella} showImg={props.showImg} style={{ width: '101%' }}/>
        <SmallGridItem id="euphoria" src={imgObjects.euphoria} showImg={props.showImg} />
        <SmallGridItem id="love" src={imgObjects.love} showImg={props.showImg} />
        <SmallGridItem id="lonestarOrange" src={imgObjects.lonestarOrange} showImg={props.showImg} />
        <SmallGridItem id="healthcareShirt" src={imgObjects.healthcareShirt} showImg={props.showImg} />
    </div>
)

export { LargeGallery, SmallGallery }