import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

//import Main from './Main'
//import Gallery from './Gallery/Gallery'
import Links from './LinksFolder/Links'
import Opener from './Opener'
import Skills from './Skills/Skills'
import Projects from './Projects/projects'
import './app.css';

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
      </div>
    );
  }
}

export default App;
