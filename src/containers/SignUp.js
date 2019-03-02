import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { signUp } from '../actions/authActions';

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
    this.props.signUp(this.state);
  }

  render() {
    const { auth, authError } = this.props;

    if (auth.uid) {
      return <Redirect to="/" /> 
    }

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
            <button className="btn green lighten-1 z-depth-0">Create</button>
          </div>
          <div className="red-text center">
              { authError ? <p>{authError}</p> : null}
            </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);