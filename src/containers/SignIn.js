import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions/authActions';

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
    this.props.signIn(this.state); // retrieved from mapDispatchToProps
  }

  render() {
    const { authError } = this.props;
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
            <div className="red-text center">
              { authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
} 
 
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);