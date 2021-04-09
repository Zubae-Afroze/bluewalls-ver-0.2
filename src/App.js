import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Landing from './components/Landing/Landing';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

import './App.css';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/signin' render={() => (<SignIn />)} />
        <Route path='/signup' component={SignUp} />
        <Route path='/' component={Landing} exact/>
      </Switch>
    </Router>
  )
}

export default App
