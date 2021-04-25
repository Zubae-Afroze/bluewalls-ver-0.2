import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Landing from './components/Landing/Landing';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import PreSurvey from './components/Survey/PreSurvey';

import './App.css';
import CustomerSurvey from './components/Survey/CustomerSurvey';
import SurveyResponse from './components/Survey/SurveyResponse';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/signin' render={() => (<SignIn />)} />
        <Route path='/signup' render={() => (<SignUp />)} />
        <Route path='/presurvey' render={() => (<PreSurvey />)} />
        <Route path='/customersurvey'  render={() => (<CustomerSurvey />)} />
        <Route path='/surveyresponse'  render={() => (<SurveyResponse />)} />
        <Route path='/dashboard' render={() => (<Dashboard />)} />
        <Route path='/' component={Landing} exact/>
      </Switch>
    </Router>
  )
}

export default App
