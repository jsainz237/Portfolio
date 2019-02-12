import React, { Component } from 'react';
//import { Switch, Route } from 'react-router-dom'

//import Main from './Main'
//import Gallery from './Gallery/Gallery'
import Links from './LinksFolder/Links'
import Opener from './Opener'
import Skills from './Skills/Skills'
import Projects from './Projects/projects'
import './app.css';
import { isMobile } from 'react-device-detect';

class App extends Component {
  render() {
    return (
      <div id='no-scroll-content'>
        <Links />
        {/* <Main />
        <Main /> */}
        <Opener />
        <Skills />
        <Projects />
        <div className='section-container' style={{ height: 500, backgroundColor: '#171717', width: '100vw' }}>
          <div className='main-content-wrapper' style={{ padding: 0, maxWidth: '80vw', margin: isMobile ? '-100px 0 0 0' : 0 }}>
            <h1><span className="blink">[</span>More Coming Soon<span className="blink">]</span></h1>
            <h3>I'll be continuously updating this site</h3>
            <h4>Come back another time for new stuff being added</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
