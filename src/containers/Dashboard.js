import React, { Component } from 'react';
import Notifications from '../components/Notifications';
import ProjectList from '../components/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props;
    
    return !auth.uid ?
      <Redirect to="/signin" />
    :
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div> 
        </div>
      </div>
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}
 
export default compose( // Use compose for multiple higher order components
  connect(mapStateToProps),
  firestoreConnect([    // Takes in array as parameter
    { collection: 'projects', orderBy: ['createdAt', 'desc']},  // Parameters for how we retrieve our data from the collections
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}  // Limit parameter responsible for retrieving 3 most recent documents in the collection
  ])
)(Dashboard);