import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import pjs from '../../projects.json';
import ProjectCard from '../ProjectCard'; 
import './style.scss';

class Projects extends Component {

    state = {
        pjs
    }

    render() {
        return (
            <Grid 
                container
                direction='column'
                justify='center'
                alignItems='center'
                id='project-container'
            >
                {this.state.pjs.map(project => {
                    return <ProjectCard 
                                key={project.id}
                                name={project.name}
                                description={project.description}
                                technology={project.technology}
                                website={project.website}
                                github={project.github}
                                image={project.image}
                                mobile={project.github}
                            />
                })}
            </Grid>
        );
    }
}

export default Projects;