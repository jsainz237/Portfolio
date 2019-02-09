import React from 'react'
import './Skills.css'

const Skill = (props) => (
    <p className='skill' id={props.id} onMouseEnter={e => props._this.changeColor(props.bgColor, props.textColor)} onMouseLeave={e => props._this.resetColor()}>{props.children}</p>
)

class Skills extends React.Component {
    constructor() {
        super();
        this.state = {
            backgroundColor: '#F2FDFF',
            textColor: '#171717'
        }
    }
    
    changeColor(backgroundColor, textColor = 'white') {
        this.setState({ backgroundColor, textColor })
    }

    resetColor() {
        this.setState({ backgroundColor: '#F2FDFF', textColor: '#171717'})
    }

    render() {
        return (
            <div className='section-container' style={{ minHeight: 500, width: '100vw', backgroundColor: this.state.backgroundColor, flexDirection: 'column', transition: 'background-color 0.5s ease'}}>
                <h1 className='skills-header' style={{ color: this.state.textColor, borderBottom: `3px solid ${this.state.textColor}` }}>Skills</h1>
                <div id='skill-wrapper'>
                    <Skill id='JS' bgColor='#F7DF1E' textColor='#323330' _this={this} >JavaScript</Skill>
                    <Skill id='HTML' bgColor='#e44f26' _this={this}>HTML5</Skill>
                    <Skill id='CSS' bgColor='#33a9dc' _this={this}>CSS3</Skill>
                    <Skill id='SCSS' bgColor='#c76493' _this={this}>SCSS</Skill>
                    <Skill id='BootStrap' bgColor='#563d7c' _this={this}>BootStrap</Skill>
                    <Skill id='React' bgColor='#272b34' textColor='#61dafb' _this={this}>React</Skill>
                    <Skill id='ReactNative' bgColor='#2d2d2d' _this={this}>React Native</Skill>
                    <Skill id='C' bgColor='white' textColor='#1a75b3' _this={this}>C</Skill>
                    <Skill id='CPP' bgColor='#1a75b3' _this={this}>C++</Skill>
                    <Skill id='RR' bgColor='#cd2027' _this={this}>Ruby+Rails</Skill>
                </div>
            </div>
        )
    }
    
}

export default Skills