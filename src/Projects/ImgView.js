import React from 'react'
import { isMobile } from 'react-device-detect'
import { imgArr } from '../utils/images'

import './styling/ImgView.styles.scss';

let backdropStyle = {
    position: 'fixed',
    top: 0, left: 0,
    height: '100vh', width: '100vw',
    backgroundColor: 'black',
    cursor: 'pointer',
    opacity: 0.95,
    overflow: 'hidden'
}

var freezeScroll = function(e) {
    e.preventDefault();
}

export default class ImgView extends React.Component {

    componentDidMount() {
        if( isMobile) {
            document.getElementById('app').addEventListener("touchmove", freezeScroll, false)
        } else {
            document.getElementById('app').classList.add('scroll-lock');
        }
        
        //alert(document.getElementById('app').classList)
    }

    componentWillUnmount() {
        if( isMobile) {
            document.getElementById('app').removeEventListener("touchmove", freezeScroll, false)
        } else {
            document.getElementById('app').classList.remove('scroll-lock');
        }
    }

    render() {
        return(
            <div style={{ zIndex: 500 }} >
                <div style={backdropStyle} id='backdrop' onClick={e => this.props.showImg(null)} />
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <img src={imgArr[this.props.index]} alt="" style={{ maxWidth: '80vw', maxHeight: '80vh'}}/>
                    <p className='close-button' onClick={() => this.props.showImg(null)}>close</p>
                </div>
            </div>
        )
    }
}

// render() {
//     return(
//         <div style={{ zIndex: 300 }} >
//             <div style={backdropStyle}  onClick={e => this.props.showImg(null)} />
//             <div style={imageContainerStyle}>
//                 <div className='arrowContainer'><ArrowLeft /></div>
//                 <img src={imgArr[this.props.index]} alt="" style={{ display: 'block', height: 'auto', width: 'auto', maxWidth: '80vw', maxHeight: '80vh'}}/>
//                 <div className='arrowContainer'><ArrowRight /></div>
//             </div>
//         </div>
//     )
// }