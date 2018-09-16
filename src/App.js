import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './Home';
import GameStart from './GameStart';
import GameTap from './GameTap';
import GameEnd from './GameEnd';
import HandsOn from './HandsOn.js';


class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/start" component={GameStart} />
              <Route path="/tap" component={GameTap} />
              <Route path="/end" component={GameEnd} />
              <Route path="/uber" component={() => {window.location = "https://m.uber.com/ul/?action=setPickup"}} />
              <Route path="/handsOn" component={HandsOn} />
            </Switch>
        </Router>

    );
  }
}

export default App;
