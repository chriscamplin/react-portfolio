import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import linkedinLogo from './img/linkedin_logo.png';
import injectSheet from 'react-jss';
import styles from './IndexStyles';
import Nav from './Nav.js';
import Grid from './Grid.js';
import './css/App.css';
import './css/index.css';

const App = ({ sheet: { classes } }) =>
  <div className={classes.appWrapper}>
    <div id="outer-container">

      <Nav />
      <main id="page-wrap">
        <header className="App-header">
          <h1 className="App-title">Christopher Camplin - UI Developer</h1>
          <a href="https://www.linkedin.com/in/christophercamplin/" target="_BLANK" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="" />
          </a>
        </header>
        <div className="App-intro">
            <Grid />
        </div>
      </main>
    </div>
  </div>;

App.propTypes = {
  sheet: PropTypes.object,
  classes: PropTypes.object
};

const StyledApp = injectSheet(styles)(App);

render(<StyledApp />, document.getElementById("root"));
