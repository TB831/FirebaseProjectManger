import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../actions/projectActions';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push('/');
  }

  render() {
    const { auth } = this.props;

    return !auth.uid ?
      <Redirect to="/signin" />
    :
      <div className="container">
        <form onSubmit={this.onSubmitHandler} className="white">
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input onChange={(e) => this.setState({ [e.target.id]: e.target.value })} type="text" id="title" />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea onChange={(e) => this.setState({ [e.target.id]: e.target.value })} id="content" className="materialize-textarea" />
          </div>
          <div className="input-field">
            <button className="btn green lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);