import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * import dispatch actions
 /**
 *
 * Import Sections
 *
 */
import { getHomeDynamicInfos } from "./modules/homeActions";


import Welcome from './sections/Welcome/Welcome';
import Introduction from './sections/Introduction/Introduction';
import Locations from './sections/Locations/Locations';

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