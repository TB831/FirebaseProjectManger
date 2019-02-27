import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './containers/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <NavBar />
          <Dashboard />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
