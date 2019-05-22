import React from 'react';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Projects from './components/Projects';
import './App.scss';

function App() {
  return (
    <div id='wrapper'>
        <Grid 
          container 
          direction='column'
          justify='flex-end'
          alignItems='center'
          className='header-container'
        >
          <Grid item xs={12}>
            <h1 className='name' id='main-name'>David Toth</h1>
          </Grid>
          <Grid item xs={12}>
            <h3 id='portfolio-header'>My portfolio</h3>
          </Grid>
          <Grid item xs={12}>
            <a href='https://www.linkedin.com/in/david-toth-5a897a151/' target='_blank' rel='noopener noreferrer'><Icon className='fab fa-linkedin'></Icon></a>
            <a href='https://github.com/Tothinator' target='_blank' rel='noopener noreferrer'><Icon className='fab fa-github-square'></Icon></a>
            <a href='/assets/files/DavidTothResume.pdf' target='_blank' download><Icon className='fas fa-file-alt'></Icon></a>
          </Grid>
          <Grid item xs={8}>
            <p id='brand-statement'>
              Full-Stack Developer with BS in Computer Science and UI/UX Bootcamp certificate. 
              Experienced in HTML5, CSS3, Javascript, JQuery, Bootstrap, React, Node Js, MySQL, 
              MongoDB, Express & Handlebars JS, Python, and Java. Dedicated to creative problem 
              solving, implementing new ideas and clean design elements. 
            </p>
          </Grid>
          <Grid item xs={12}>
            <h1 className='name' id='fixed-name'>David Toth</h1>
          </Grid>
        </Grid>
      <Projects />
    </div>
  );
}

export default App;
