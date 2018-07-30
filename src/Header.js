import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './IndexStyles';
import Icon from './Icon';
import ICONS from './constants';

const Header = ({ sheet: { classes } }) => (
    <header className="App-header">
      <h1 className="App-title">Christopher Camplin - Javascript Developer</h1>
      <a href="https://www.linkedin.com/in/christophercamplin/" target="_BLANK" rel="noopener noreferrer">
          <Icon icon={ICONS.LINKEDIN2} />
      </a>
    </header>
);

Header.propTypes = {
  sheet: PropTypes.object,
  classes: PropTypes.object
};


export default injectSheet(styles)(Header);
