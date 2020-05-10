import React from 'react'
import './Skills.css'
import { isMobile } from 'react-device-detect'

const Skill = (props) => (
    <p className='skill' id={props.id} onMouseEnter={e => props._this.changeColor(props.bgColor, props.textColor)} onMouseLeave={e => props._this.resetColor()}>{props.children}</p>
)

const SkillMobile = (props) => (
    <p className='skill' id={props.id} onClick={e => props._this.changeColor(props.bgColor, props.textColor)}>{props.children}</p>
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

    desktopSkills = (
        <div id='skill-wrapper'>
            <Skill id='JS' bgColor='#F7DF1E' textColor='#323330' _this={this} >JavaScript</Skill>
            <Skill id='React' bgColor='#272b34' textColor='#61dafb' _this={this}>React</Skill>
            <Skill id='Angular' bgColor='#256fc6' textColor='#c3002f' _this={this}>Angular</Skill>
            <Skill id='Node' bgColor="#333333" textColor="#3e863c" _this={this}>Node.js</Skill>
            <Skill id='ReactNative' bgColor='#2d2d2d' _this={this}>React Native</Skill>
            <Skill id='HTML' bgColor='#e44f26' _this={this}>HTML5</Skill>
            <Skill id='CSS' bgColor='#33a9dc' _this={this}>CSS3</Skill>
            <Skill id='SCSS' bgColor='#c76493' _this={this}>Sass</Skill>
            <Skill id='BootStrap' bgColor='#563d7c' _this={this}>BootStrap</Skill>
            <Skill id='Java' bgColor='#d70102' _this={this}>Java</Skill>
            <Skill id='Python' bgColor='#306897' textColor="#ffd54b" _this={this}>Python</Skill>
            <Skill id='C' bgColor='white' textColor='#1a75b3' _this={this}>C</Skill>
            <Skill id='CPP' bgColor='#1a75b3' _this={this}>C++</Skill>
            <Skill id='RR' bgColor='#cd2027' _this={this}>Ruby+Rails</Skill>
        </div>
    )

    mobileSkills = (
        <div id='skill-wrapper'>
            <SkillMobile id='JS' bgColor='#F7DF1E' textColor='#323330' _this={this} >JavaScript</SkillMobile>
            <SkillMobile id='React' bgColor='#272b34' textColor='#61dafb' _this={this}>React</SkillMobile>
            <SkillMobile id='Angular' bgColor='#256fc6' textColor='#c3002f' _this={this}>Angular</SkillMobile>
            <SkillMobile id='Node' bgColor="#333333" textColor="#3e863c" _this={this}>Node.js</SkillMobile>
            <SkillMobile id='ReactNative' bgColor='#2d2d2d' _this={this}>React Native</SkillMobile>
            <SkillMobile id='HTML' bgColor='#e44f26' _this={this}>HTML5</SkillMobile>
            <SkillMobile id='CSS' bgColor='#33a9dc' _this={this}>CSS3</SkillMobile>
            <SkillMobile id='SCSS' bgColor='#c76493' _this={this}>Sass</SkillMobile>
            <SkillMobile id='BootStrap' bgColor='#563d7c' _this={this}>BootStrap</SkillMobile>
            <SkillMobile id='Java' bgColor='#d70102' _this={this}>Java</SkillMobile>
            <SkillMobile id='Python' bgColor='#306897' textColor="#ffd54b" _this={this}>Python</SkillMobile>
            <SkillMobile id='C' bgColor='white' textColor='#1a75b3' _this={this}>C</SkillMobile>
            <SkillMobile id='CPP' bgColor='#1a75b3' _this={this}>C++</SkillMobile>
            <SkillMobile id='RR' bgColor='#cd2027' _this={this}>Ruby+Rails</SkillMobile>
        </div>
    )

    render() {
        return (
            <div className='section-container' 
                style={{ minHeight: 500, width: '100vw', backgroundColor: this.state.backgroundColor, flexDirection: 'column', transition: 'background-color 0.5s ease'}}
                onClick={e => e.target.className === 'section-container' && isMobile ? this.resetColor() : null }
                >
                <h1 className='skills-header' style={{ color: this.state.textColor, borderBottom: `3px solid ${this.state.textColor}` }}>Skills</h1>
                { isMobile ? this.mobileSkills : this.desktopSkills }
            </div>
        )
    }
    
}

export default Skills