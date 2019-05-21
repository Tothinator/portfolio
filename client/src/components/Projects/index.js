import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import pjs from '../../projects.json';
import ProjectCard from '../ProjectCard'; 
import ProjectCarousel from '../ProjectCarousel';
import './style.scss';

class Projects extends Component {

    state = {
        pjs
    }

    render() {
        if(isWidthDown('md', this.props.width)) {
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

        return (
            <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
                id='carousel-container'
            >
                <Grid item xs={12}>
                    <ProjectCarousel 
                        projects={this.state.pjs}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default withWidth()(Projects);