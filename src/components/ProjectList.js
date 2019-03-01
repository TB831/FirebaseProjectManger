import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = (props) => {
  const { projects } = props;

  return (
    <div className="project-list section">
      { projects && projects.map(project => { // If we have projects, continue with projects.map. else do nothing.
        return (
          <Link to={'/project/' + project.id} key={project.id}>
            <ProjectSummary project={project} />          
          </Link>
        )
      })}
    </div>
  );
}
 
export default ProjectList;