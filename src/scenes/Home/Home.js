import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Import dispatch actions
 */
import { getLocationsAndEvents } from '../../services/api/locationsAndEvents/locationsAndEventsActions';

/**
 *
 * Import Sections
 *
 */
import Welcome from './sections/Welcome/Welcome';
import Introduction from './sections/Introduction/Introduction';
import LocationsSection from './sections/LocationsSection/LocationsSection';
import UpcommingEvents from './sections/UpcomingEvents/UpcomingEvents';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.homeActions.getLocationsAndEvents();
  }
  render() {
    return (
      <div className="home">
        <Welcome />
        <Introduction />
        <LocationsSection />
        <UpcommingEvents />
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    homeActions: bindActionCreators(
      {
        getLocationsAndEvents
      },
      dispatch
    )
  })
)(Home);
