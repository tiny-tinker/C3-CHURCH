import React from 'react';
import PropTypes from 'prop-types';
import './decorativeRectangleContainer.css';

class DecorativeRectangleContainer extends React.Component {
  render() {
    return (
      <div className="decorative-rectangle-container">
        <div className="half-circle-container">
          <div className="half-circle" />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default DecorativeRectangleContainer;
