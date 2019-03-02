import React from 'react';
import moment from 'moment';

const ProjectSummary = (props) => {
  const { project } = props;

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grew-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by {project.authorFirstname} {project.authorLastName}</p>
        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
}
 
export default ProjectSummary;