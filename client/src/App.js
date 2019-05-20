import React from 'react';
import Grid from '@material-ui/core/Grid';
import Projects from './components/Projects';
import './App.scss';

function App() {
  return (
    <div id="wrapper">
      <Grid 
        container 
        direction="column"
        justify="flex-end"
        alignItems="center"
      >
        <Grid item xs={12}>
          <h1 id="name">David Toth</h1>
        </Grid>
        <Grid item xs={12}>
          <h3 id="portfolio-header">My portfolio</h3>
        </Grid>
      </Grid>
      <Projects />
    </div>
  );
}

export default App;
