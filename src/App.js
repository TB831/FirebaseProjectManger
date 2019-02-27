import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './containers/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
