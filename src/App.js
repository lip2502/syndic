import React, { Component } from 'react';
//React Router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Layout Components
import Dashboard from './layout/Dashboard.jsx';
import Login from './layout/Login.jsx';
import Tasks from './layout/Tasks.jsx';
//Styles imports
import {Grid} from 'react-bootstrap'
import './common/css/styles.css';

import './common/css/App.css'


class App extends Component {
  render() {
    return (

        <Router>
          <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/login' component={Login}/>
            <Route path='/tasks' component={Tasks}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
