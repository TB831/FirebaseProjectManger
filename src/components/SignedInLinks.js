import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions/authActions';

const SignedInLinks = (props) => {
  const { signOut, profile } = props;

  return (
    <ul className="right">
      <li><NavLink to="/create">New Project</NavLink></li>
      <li><a onClick={signOut}>Log out</a></li>
      <li><NavLink to="/" className="btn btn-floating green lighten-1">{profile.initials}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);