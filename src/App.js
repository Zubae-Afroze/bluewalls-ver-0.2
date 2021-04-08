import React from 'react';
import Landing from './components/Landing/Landing';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Landing} exact/>
      </Switch>
    </Router>
  )
}

export default App
