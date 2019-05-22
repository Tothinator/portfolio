import React from 'react';

function ProjectView({ active, project, disable }) {
    
    return (

        <div id='project-view-container'>
            <iframe title={project.name} src={project.website} frameBorder='0' allowFullScreen></iframe>
            <button className='btn-floating btn-small waves-effect view-btn' onClick={() => disable()}><i className="fas fa-times"></i></button>
        </div>
    )
}

export default ProjectView;