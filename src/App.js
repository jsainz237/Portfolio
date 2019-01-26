import React, { Component } from 'react';

import Home from './Home'
import Projects from './Projects/projects'
import Links from './LinksFolder/Links'
import './app.css';

class App extends Component {
  render() {
    return (
      <div id='no-scroll-content'>
        <Links />
        <Home />
        <Projects />
      </div>
    );
  }
}

export default App;
