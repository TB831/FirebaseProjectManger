import React, { Component } from 'react';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(
    //   this.state.email, 
    //   this.state.password, 
    //   this.state.firstName, 
    //   this.state.lastName
    //   );
  }

  render() { 
    return (
      <div className="container">
        <form onSubmit={this.onSubmitHandler} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input onChange={(e) => this.setState({ [e.target.id]: e.target.value })} type="email" id="email" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input onChange={(e) => this.setState({ [e.target.id]: e.target.value })} type="password" id="password" />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input onChange={(e) => this.setState({ [e.target.id]: e.target.value })} type="text" id="firstName" />
          </div>
          <div className="input-field">
            <label htmlFor="text">Last Name</label>
            <input onChange={(e) => this.setState({ [e.target.id]: e.target.value })} type="text" id="lastName" />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
 
export default SignUp;