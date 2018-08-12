import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Locations from '../components/Locations/Locations';
import './visit.css';

/**
 * Import dispatch actions
 */
import { getLocationsAndEvents } from '../../services/api/locationsAndEvents/locationsAndEventsActions';

class Visit extends React.Component {
  constructor(props) {
    super(props);
    this.props.homeActions.getLocationsAndEvents();
  }

  render() {
    const { loading, locations, error } = this.props;
    return <Locations loading={loading} locations={locations} error={error} />;
  }
}

export default connect(
  state => ({
    loading: state.locationsAndEvents.loading,
    locations: state.locationsAndEvents.locationsAndEvents.locations,
    error: state.locationsAndEvents.error
  }),
  dispatch => ({
    homeActions: bindActionCreators(
      {
        getLocationsAndEvents
      },
      dispatch
    )
  })
)(Visit);
