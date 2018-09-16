import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import GameStart from './GameStart';
import GameTap from './GameTap';

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/start" component={GameStart} />
              <Route path="/tap" component={GameTap} />
            </Switch>
        </Router>

    );
  }
}

export default App;
