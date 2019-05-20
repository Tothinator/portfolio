import React from 'react';
import Grid from '@material-ui/core/Grid';
import './style.scss';

function ProjectCard({ name, description, technology, website, github, image, mobile }) {

    return (
        <Grid item 
        xs={12}
        className='project-card'>
            <h1 className='project-title'> {name} </h1>
            <p className='project-description'> {description} </p>
            <img src={image} alt={name} className='project-image' />
            <p className='project-technology'> {technology} </p>
            <a href={website} className='project-website'> Website </a>
            <a href={github} className='project-github'> GitHub </a>
        </Grid>
    )
}

export default ProjectCard;