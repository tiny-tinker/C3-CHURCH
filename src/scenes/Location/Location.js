import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScaleLoader } from 'react-spinners';
import AlignItemCenter from '../components/AlignItemCenter/AlignItemCenter';
import './location.css';

/**
 * Import dispatch actions
 */
import { getLocationInfo } from '../../services/api/visit/visitActions';

/**
 * Import image
 */
import defaulteBg from '../../assets/images/default.jpg';

class Location extends React.Component {
  constructor(props) {
    super(props);
    let location = props.match.params.location;
    props.locationActions.getLocationInfo(location);
  }

  renderLocationInfo(locationInfo) {
    if (locationInfo !== null) {
      return (
        <div className="location-info-container">
          <img src={locationInfo.photo_url} className="banner-image" />
        </div>
      );
    }
  }
  render() {
    let { loading, locationInfo, error } = this.props;
    let bShowError = false;
    if (error !== null) {
      bShowError = true;
      loading = true;
    }

    let loadingClass = 'loading-viewer';
    if (loading === false) {
      loadingClass = 'loading-viewer hide';
    }

    return (
      <div className="location-scene">
        <div className={loadingClass}>
          <img src={defaulteBg} />
          <div className="scale-loader-container">
            <AlignItemCenter className="scale-loader">
              <ScaleLoader color={'#fff'} loading={loading} />
              {bShowError ? (
                <div className="location-loading-error-text">
                  Something went wrong!
                </div>
              ) : (
                ''
              )}
            </AlignItemCenter>
          </div>
        </div>
        {this.renderLocationInfo(locationInfo)}
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.visit.loading,
    locationInfo: state.visit.locationInfo,
    error: state.visit.error
  }),
  dispatch => ({
    locationActions: bindActionCreators(
      {
        getLocationInfo
      },
      dispatch
    )
  })
)(Location);
