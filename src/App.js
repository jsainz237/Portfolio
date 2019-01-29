import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Main from './Main'
import Gallery from './Gallery/Gallery'
import Links from './LinksFolder/Links'
import './app.css';

class App extends Component {
  render() {
    return (
      <div id='no-scroll-content'>
        <Links />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path='/designs' component={Gallery} />
        </Switch>
        {/* <Main /> */}
      </div>
    );
  }
}

export default App;
