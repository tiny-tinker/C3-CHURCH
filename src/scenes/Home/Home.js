import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Import dispatch actions
 */
import { getHomeDynamicInfos } from "./modules/homeActions";

/**
 *
 * Import Sections
 *
 */
import Welcome from './sections/Welcome/Welcome';
import Introduction from './sections/Introduction/Introduction';
import Locations from './sections/Locations/Locations';
import UpcommingEvents from './sections/UpcomingEvents/UpcomingEvents';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.homeActions.getHomeDynamicInfos();
  }
  render() {
    return (
      <div className="home">
        <Welcome/>
        <Introduction/>
        <Locations/>
        <UpcommingEvents/>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    homeActions : bindActionCreators({
        getHomeDynamicInfos
      }, dispatch
    )
  })
)(Home);