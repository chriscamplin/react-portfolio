import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './IndexStyles';
import Nav from './Nav.js';
import Grid from './Grid.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './css/App.css';
import './css/index.css';

const App = ({ sheet: { classes } }) =>
  <div className={classes.appWrapper}>
    <div id="outer-container">

      <Nav />
      <main id="page-wrap">
        <Header />
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

export default StyledApp;

