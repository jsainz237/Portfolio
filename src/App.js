import React, { Component } from 'react';
//import { Switch, Route } from 'react-router-dom'

//import Main from './Main'
//import Gallery from './Gallery/Gallery'
import Links from './LinksFolder/Links'
import Opener from './Opener'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects.index'
import { DevProjects } from './DevProjects/DevProjects';
import './app.css';
import { isMobile } from 'react-device-detect';
import { Contact } from './Contact/Contact.index';

class App extends Component {
  
  componentDidMount() {
    if(!isMobile) {
      document.getElementById('html').style.setProperty("overflow", "hidden");
      document.getElementById('html').style.setProperty("-webkit-overflow-scrolling", "touch");
      document.getElementById('body').style.setProperty("overflow", "hidden");
      document.getElementById('body').style.setProperty("-webkit-overflow-scrolling", "touch");
    }
  }
  
  render() {
    return (
      <div id='app' className={ isMobile ? null : 'no-scroll-content'}>
        <Links />
        {/* <Main />
        <Main /> */}
        <Opener />
        <Skills />
        <Projects />
        <DevProjects />
        <Contact />
      </div>
    );
  }
}

export default App;
