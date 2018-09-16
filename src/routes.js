import React from 'react';
import { Router, Route } from 'react-router';
import GameStart from './GameStart';
import App from './App';

const createRoutes = () => (
    <Router>
      <Route exact path="/" component={App}/>
      <Route exact path="/start" component={GameStart}/>
    </Router>
);

export default createRoutes;
