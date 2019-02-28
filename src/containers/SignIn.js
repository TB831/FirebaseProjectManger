import React, { Component } from 'react';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(this.state);
  }

  render() { 
    return (
      <div className="container">
        <form onSubmit={this.onSubmitHandler} className="white">
          <h5 className="grey-text text-darken-3">Login</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input onChange={(e) => this.setState({ [e.target.id]: e.target.value })} type="email" id="email" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input onChange={(e) => this.setState({ [e.target.id]: e.target.value })} type="password" id="password" />
          </div>
          <div className="input-field">
            <button className="btn green lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
 
export default SignIn;