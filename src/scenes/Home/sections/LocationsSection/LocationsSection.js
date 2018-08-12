import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import Locations from '../../../components/Locations/Locations';
/**
 *
 * Setup vars
 *
 */
const sectionTitle = 'ONE CHURCH, THREE LOCATIONS.';

class LocationsSection extends React.Component {
  render() {
    const { loading, locations, error } = this.props;
    return (
      <div className="locations-section">
        <Container>
          <div className="section-title">{sectionTitle}</div>
        </Container>
        <Locations loading={loading} locations={locations} error={error} />
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.locationsAndEvents.loading,
    locations: state.locationsAndEvents.locationsAndEvents.locations,
    error: state.locationsAndEvents.error
  }),
  null
)(LocationsSection);
