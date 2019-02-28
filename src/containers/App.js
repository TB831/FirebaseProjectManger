import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Dashboard from './Dashboard';
import ProjectDetails from '../components/ProjectDetails';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateProject from './CreateProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
