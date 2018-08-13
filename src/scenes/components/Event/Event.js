import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './event.css';

class Event extends React.Component {
  render() {
    const { imageUrl, title, starttime } = this.props;
    return (
      <div className="events-card">
        <img src={imageUrl} />
        <div className="events-title">{title}</div>
        <div className="events-start-time">
          {moment(starttime).format('MMMM D, YYYY')}
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  starttime: PropTypes.string.isRequired
};

export default Event;
