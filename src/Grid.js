import React, { Component } from 'react';
import myData from './data/site-data.json';
import LazyLoad from 'react-lazy-load'

class Grid extends Component {
  render() {
    return (
      <div>
        {myData.Portfolio.map((item, index) =>

          <div id={'grid-row-' + index} className="grid-row" key={index}>
              <div key={index}>
                  <div>
                      <p>{item.html}</p>
                      <br />
                      <p>{item.image_alt}</p>
                  </div>
              </div>
              <div key={index + 1 } className="right-panel">
                  <a href={item.path} target="_BLANK" rel="noopener noreferrer">
                      <LazyLoad height={'50vh'} offsetBottom={100} debounce={false}>
                          <img src={item.image_path} alt={item.image_alt} />
                      </LazyLoad>
                  </a>
              </div>
          </div>)}
    </div>
    )
  }
}

export default Grid;
