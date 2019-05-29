import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import pjs from '../../projects.json';
import ProjectCard from '../ProjectCard'; 
import ProjectCarousel from '../ProjectCarousel';
import ProjectView from '../ProjectView';
import './style.scss';

class Projects extends Component {

    state = {
        pjs,
        active: false,
        projectView: {}
    }

    setProjectView = id => {
        this.setState({
            active: true,
            projectView: this.state.pjs.filter(pj => pj.id === id)[0]
        });
    }

    disableProjectView = () => {
        this.setState({
            active: false,
            projectView: null
        })
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
                {this.state.active && 
                    <Grid item xs={12} id='project-view-row'>
                        <ProjectView
                            project={this.state.projectView}
                            active={this.state.active}
                            disable={() => this.disableProjectView()}
                        />
                    </Grid>
                }
                <Grid item xs={12}>
                    <ProjectCarousel 
                        projects={this.state.pjs}
                        active={this.state.active}
                        onClick={id => this.setProjectView(id)}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default withWidth()(Projects);