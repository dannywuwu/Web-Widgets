import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import Signin from './components/auth/SignIn'
import Signup from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>

          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route path='/project/:id' component={ProjectDetails}></Route>
            <Route path='/signin' component={Signin}></Route>
            <Route path='/signup' component={Signup}></Route>
            <Route path='/create' component={CreateProject}></Route>
          </Switch>

        </div>
      </Router>


    );
  }
}

export default App;
