import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './App';

export default () => (
  <Router>
    <Route path="/:tag" component={App}></Route>
  </Router>
);
