import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import Icon from './Icon';
import ICONS from './constants';
import injectSheet from 'react-jss';
import styles from './IndexStyles';
import Nav from './Nav.js';
import Grid from './Grid.js';
import Footer from './Footer.js';
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
              <Icon icon={ICONS.LINKEDIN2} />
          </a>
        </header>
        <div className="App-intro">
            <Grid />
        </div>
      </main>
      <Footer />
    </div>
  </div>;

App.propTypes = {
  sheet: PropTypes.object,
  classes: PropTypes.object
};

const StyledApp = injectSheet(styles)(App);

render(<StyledApp />, document.getElementById("root"));
