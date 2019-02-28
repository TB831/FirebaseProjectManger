import React, { Component } from 'react';

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
    console.log(this.state);
  }

  render() { 
    return (
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
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}
 
export default CreateProject;