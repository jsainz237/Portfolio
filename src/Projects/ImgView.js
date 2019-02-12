import React from 'react'
//import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import { imgArr } from '../utils/images'

let backdropStyle = {
    position: 'absolute',
    top: 0, left: 0,
    height: '100vh', width: '100vw',
    backgroundColor: 'black',
    cursor: 'pointer',
    opacity: 0.95,
    overflow: 'hidden'
}

export default class ImgView extends React.Component {

    componentDidMount() {
        document.getElementById('no-scroll-content').classList.add('scroll-lock');
    }

    componentWillUnmount() {
        document.getElementById('no-scroll-content').classList.remove('scroll-lock');
    }

    render() {
        return(
            <div style={{ zIndex: 300 }} >
                <div style={backdropStyle} id='backdrop' onClick={e => this.props.showImg(null)} />
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <img src={imgArr[this.props.index]} alt="" style={{ maxWidth: '80vw', maxHeight: '80vh'}}/>
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