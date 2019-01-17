import React, { Component } from 'react';

import Home from './Home'
import Links from './LinksFolder/Links'
import './app.css';

class App extends Component {
  render() {
    return (
      <div id='no-scroll-content'>
        <Links />
        <Home />
      </div>
    );
  }
}

export default App;
