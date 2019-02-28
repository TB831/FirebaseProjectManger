import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './containers/Dashboard';
import ProjectDetails from './components/ProjectDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
