import React from 'react';

const ProjectDetails = (props) => {
  const { id } = props.match.params;
  
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Elit anim cillum cillum laborum culpa do ea nostrud quis laboris nisi nostrud voluptate. Est non tempor exercitation excepteur nisi aute sunt. Lorem magna dolore voluptate enim sint Lorem eu culpa minim commodo pariatur quis excepteur. Et sint incididunt culpa tempor velit sunt in. Culpa aliquip fugiat tempor sint. Aliquip qui pariatur cillum sint aliquip consectetur occaecat ullamco nulla occaecat anim reprehenderit ad.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Andrew Snahcez</div>
          <div>27th February, 11:37AM</div>
        </div>
      </div>
    </div>
  );
}
 
export default ProjectDetails;