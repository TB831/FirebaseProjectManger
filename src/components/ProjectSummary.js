import React from 'react';

const ProjectSummary = (props) => {
  const { title, authorFirstname, authorLastName, } = props.project;

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grew-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>Posted by {authorFirstname} {authorLastName}</p>
        <p className="grey-text">27th February, 10:16AM</p>
      </div>
    </div>
  );
}
 
export default ProjectSummary;