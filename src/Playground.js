import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './IndexStyles';
import Nav from './Nav.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './css/App.css';
import './css/index.css';
import { Graph } from 'react-d3-graph';
//import flightData from 'http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json';
import axios from 'axios';


// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
    nodeHighlightBehavior: true,
    node: {
        color: '#04DEAD ',
        size: 300,
        highlightStrokeColor: '#04DEAD',
        height: '100%',
        width: '100%',
        'fontSize': 16
    },
    link: {
        highlightColor: '#04DEAD'
    }
};

// graph event callbacks
const onClickNode = function(nodeId) {
    console.log(`Clicked node ${nodeId}`);
};

const onMouseOverNode = function(nodeId) {
    console.log(`Mouse over node ${nodeId}`);
};

const onMouseOutNode = function(nodeId) {
    console.log(`Mouse out node ${nodeId}`);
};

const onClickLink = function(source, target) {
    console.log(`Clicked link between ${source} and ${target}`);
};

const onMouseOverLink = function(source, target) {
    console.log(`Mouse over in link between ${source} and ${target}`);
};

const onMouseOutLink = function(source, target) {
    console.log(`Mouse out link between ${source} and ${target}`);
};

class Playground extends Component {
  state = {
    flightData: []
  }

  componentDidMount() {
    axios.get(`/VirtualRadar/AircraftList.json`)
      .then(res => {
        const flightData = res.data.acList.map(obj => obj.Op);
        this.setState({ flightData });
        console.log('Number of passenger aircraft currently airborne: ', flightData.length)
        console.log('flightData:: ');
        console.table(this.state.flightData);
      });
  }

  render() {
      const { sheet: { classes } } = this.props;
      // graph payload (with minimalist structure)
      const data = {
          nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }],
          links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }]
      };

      return (
        <div className={classes.appWrapper}>
          <div id="outer-container">

            <Nav />
            <main id="page-wrap">
              <Header />
              <div className="App-intro">
                <Graph 
                  id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                  data={data}
                  config={myConfig}
                  onClickNode={onClickNode}
                  onClickLink={onClickLink}
                  onMouseOverNode={onMouseOverNode}
                  onMouseOutNode={onMouseOutNode}
                  onMouseOverLink={onMouseOverLink}
                  onMouseOutLink={onMouseOutLink}
                />
              </div>
            </main>
            <Footer />
          </div>
        </div>
      );

  }
}
Playground.propTypes = {
  sheet: PropTypes.object,
  classes: PropTypes.object
};

const StyledPlayground = injectSheet(styles)(Playground);

export default StyledPlayground;

