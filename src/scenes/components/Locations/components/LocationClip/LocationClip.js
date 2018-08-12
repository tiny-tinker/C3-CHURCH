import React from 'react';
import PropTypes from 'prop-types';
import LocationTextClip from '../LocationTextClip/LocationTextClip';
import './locationClip.css';
import AlignItemCenter from '../../../AlignItemCenter/AlignItemCenter';

class LocationClip extends React.Component {
  render() {
    const { logoUrl, name, times, id, backgroundImage } = this.props;
    return (
      <div className="location-clip">
        <img src={backgroundImage} />
        <div className="location-clip-data-container">
          <AlignItemCenter className="w-100">
            <LocationTextClip
              logoUrl={logoUrl}
              name={name}
              times={times}
              id={id}
            />
          </AlignItemCenter>
        </div>
      </div>
    );
  }
}

LocationClip.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  times: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired
};

export default LocationClip;
