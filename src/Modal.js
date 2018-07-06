import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

const duration = 1000;


const Fade = ({ in: inProp }, props) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div className="active">
        <div className="backdrop">
          <div className="modal">
            <div className="footer">

            </div>
          </div>
        </div>
      </div>
    )}
  </Transition>
)

class Modal extends Component {

  handleClickOutside = (evt) => {
    console.log('onClickOutside() method called');
  }

  hideAlert() {
    console.log('hideAlert() method called');
  }

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
        <div>
          <Fade in={!this.props.show}>
            {this.props.children}
          </Fade>
        </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default onClickOutside(Modal);