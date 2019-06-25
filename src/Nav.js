import React, { Component } from 'react';

import injectSheet from 'react-jss';

import { push as Menu } from 'react-burger-menu';

import Icon from './Icon';
import styles from './IndexStyles';
import ICONS from './constants';

import SimpleModalLauncher from './SimpleModalLauncher/SimpleModalLauncher';
import './css/BurgerMenu.css';
import myData from './data/site-data.json';

class Nav extends Component {

  render() {
    const { sheet: { classes } } = this.props;

    return (
        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <div>
            <a className="menu-item--small" href="/">
              <Icon icon={ICONS.HOME} /> Home
            </a>
          </div>
          <div>
            <a className="menu-item--small" href="https://github.com/chriscamplin" target="_BLANK" rel="noopener noreferrer">
              <Icon icon={ICONS.GITHUB} /> Github
            </a>
          </div>
          {/* maps out modal launcher nav items */}
          {myData.Nav.map((item, index) =>
            <SimpleModalLauncher buttonLabel={item.label} iconRef={item.icon} key={index}>
              <div className={classes.textModal}>
                <h2>{item.title}</h2>
                {item.image !== null &&
                  <img src={item.image} alt={item.title} />
                }

                {item.url !== null ? ( 
                  <a href={item.url}>{item.content}</a>
                  ) : (
                  <p>{item.content}</p>
                  )
                }

                {item.iframe !== null &&
                  <iframe title={item.label} src={item.iframe}></iframe>
                }
              </div>
            </SimpleModalLauncher>
          )}
          {/*  <a className="menu-item--small" href="">Data visualisations</a> plan to create 3d data visualisation to demonstrate skills
          <div className={classes.playgroundLink}>
            <a className="menu-item--small playgroundLink" href="/playground" >
              <Icon icon={ICONS.BARCHART} /> Playground
            </a>
          </div>
          */}
        </Menu>
    )
  }
}

export default injectSheet(styles)(Nav);
