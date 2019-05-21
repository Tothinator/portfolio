import React, { Component } from 'react';
import { Carousel } from 'react-materialize';
import './style.scss';
// import $ from 'jquery';

class ProjectCarousel extends Component {
    
    state = {
        projects: this.props.projects,
        activeClass: false
    }

    render() {
        return (
            <Carousel carouselId='project-carousel'>
                {this.state.projects.map(project => {
                    return (
                            <div
                                key={project.id}
                                className={`carousel-card ${this.state.activeClass ? 'active' : ''}`}
                            >
                                <div className='carousel-wrapper'>
                                    <img className='carousel-img' src={project.image} alt={project.name} />       
                                    <div className='carousel-overlay'>
                                        <h1 className='carousel-title'>{project.name}</h1>
                                        <p className='carousel-text'>{project.description}</p>
                                        <button className='carousel-btn waves-effect btn'>More Info</button>
                                    </div>                             
                                </div>
                            </div>
                        )
                })}
            </Carousel>
        )
    }
}

export default ProjectCarousel;
