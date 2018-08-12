import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './groupCard.css';
import { MapWithAMarker } from '../../../components/GoogleMap/GoogleMap';

class GroupCard extends React.Component {
  render() {
    const {
      latitude,
      longitude,
      name,
      leader,
      address,
      locationName,
      phone,
      time
    } = this.props;
    return (
      <div className="group-card">
        <div className="map-container">
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAlhcI-WfSpG7oL07O4SRGVL_fM8HVJbBo&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            lat={latitude}
            lng={longitude}
          />
        </div>
        <div className="align-item-container group-card-flex">
          <div className="align-item align-item-top">
            <div className="group-card-content">
              <div className="name">{name}</div>
              <div className="secondary-color">{leader}</div>
              <div className="secondary-color">{address}</div>
              <div className="secondary-color">{locationName + 'Campus'}</div>
              <div className="secondary-color">{phone}</div>
            </div>
          </div>
          <div className="align-item" />
          <div className="align-item align-item-bottom w-100">
            <div className="date-time-container">
              <span>{moment(time).format('MMMM D, YYYY')}</span>
              <span className="float-right">{moment(time).format('H A')}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
GroupCard.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  leader: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  time: PropTypes.instanceOf(Date).isRequired
};

export default GroupCard;
