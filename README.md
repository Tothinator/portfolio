# Portfolio

## About Me
Full-Stack Developer with a BS in Computer Science and UI/UX Bootcamp certificate.  Dedicated to creative problem solving, implementing new ideas and clean design elements. Team player, goal-oriented, and experienced in building dynamic web applications using various programming languages. 

## About My Portfolio
My portfolio is hosted on Heroku here, https://david-toth-portfolio.herokuapp.com/

It is built with, React, Express, Material-UI, React-Materialize, and Node-Sass.

## Known Issues
1. When the page first loads on desktop, the carousel objects are pushed down and cutoff by the bottom of the div.  The easy way to fix this is to refresh the page! I am still looking into what is causing the 1st time rendering issue.

2. A lot of my portfolio projects are hosted on Heroku.  When displaying the iframe or visiting them for the first time in over 24 hours, they take some time to load.  This is because Heroku "shuts down" the server it is being run on if it is not used for a while.  Fix is to add a loading image to the iframe to show it is taking time to load.

3. When on desktop, the jumping of iframes being loaded is jarring and I would like to add an ease in animation to make it more presentable.
