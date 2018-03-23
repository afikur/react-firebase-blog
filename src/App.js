import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import News from './News/News';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/news" component={News} />
          <Route render={() => <div>404</div>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
