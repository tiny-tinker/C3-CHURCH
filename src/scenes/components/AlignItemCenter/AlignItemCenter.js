import React from 'react';
import PropTypes from 'prop-types';
import './alignItemCenter.css';

class AlignItemCenter extends React.Component {
  render() {
    return(
      <div className="align-item-container">
        <div className="align-item align-item-top"/>
        <div className={['align-item',this.props.className].join(' ')}>
          {
            this.props.children
          }
        </div>
        <div className="align-item align-item-bottom"/>
      </div>
    )
  }
}

AlignItemCenter.propTypes = {
  className: PropTypes.string
};

export default AlignItemCenter;