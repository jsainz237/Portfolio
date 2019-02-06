import React from 'react'

import { imgArr } from '../utils/images'

let backdropStyle = {
    position: 'absolute',
    top: 0, left: 0,
    height: '100vh', width: '100vw',
    backgroundColor: 'black',
    cursor: 'pointer',
    opacity: 0.95,
}

export default class ImgView extends React.Component {

    render() {
        return(
            <div style={{ zIndex: 300 }} >
                <div style={backdropStyle}  onClick={e => this.props.showImg(null)} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
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