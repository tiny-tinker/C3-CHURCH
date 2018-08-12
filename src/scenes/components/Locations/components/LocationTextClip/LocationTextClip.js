import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './locationTextClip.css';

class LocationTextClip extends React.Component {
  render() {
    const { id, logoUrl, name, handleEventOver } = this.props;
    return (
      <div onMouseEnter={handleEventOver} className="location-text-clip">
        <div className="link-container">
          <Link className="link" to={'/visit/' + name.toLowerCase()}>
            <img src={logoUrl} className="img-h" alt="" />
            <span>{name}</span>
          </Link>
        </div>
        <div className="time-container">
          <div className="times-vertical-line" />
          <div className="times-text">10AM</div>
        </div>
      </div>
    );
  }
}

LocationTextClip.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  times: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleEventOver: PropTypes.func
};

export default LocationTextClip;
