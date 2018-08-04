import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { ScaleLoader } from 'react-spinners';
import $ from 'jquery';
import './locations.css';
import AlignItemCenter from '../../../components/AlignItemCenter/AlignItemCenter';
import LocationTextClip from './components/LocationTextClip/LocationTextClip';
import LocationClip from './components/LocationClip/LocationClip';


/**
 * Import images
 */
import defaultLocation from './images/default.jpg';

/**
 *
 * Setup vars
 *
 */
const sectionTitle = 'ONE CHURCH, THREE LOCATIONS.';

class Locations extends React.Component {
  constructor(props) {
    super(props);

    this.currentViewerImageId = 0;

    /**
     *
     * bind functions
     *
     */
    this.renderLocationImages = this.renderLocationImages.bind(this);
    this.renderLocationTextClip = this.renderLocationTextClip.bind(this);
    this.renderLocationClip = this.renderLocationClip.bind(this);
    this.handleHoverLocation = this.handleHoverLocation.bind(this);
  }

  /**
   *
   * Custom Render functions
   *
   */
  renderLocationImages(locations) {
    if (locations !== null) {
      return locations.map((location, index) => (
        <img id={"locationBackground" + location.id} src={location.photo_url}/>
      ));
    }
  }

  renderLocationTextClip(locations) {
    if (locations !== null) {
      return locations.map((location) => (
        <Col xs="4">
          <LocationTextClip handleEventOver={()=>{this.handleHoverLocation(location.id)}} logoUrl={location.logo_url} name={location.name} times={location.times} id={location.id}/>
        </Col>
      ));
    }
  }

  renderLocationClip(locations) {
    if (locations !== null) {
      return locations.map((location) => (
        <LocationClip logoUrl={location.logo_url} name={location.name} times={location.times} id={location.id} backgroundImage={location.photo_url}/>
      ));
    }
  }

  /**
   *
   * Events Handler
   *
   */
  handleHoverLocation(id) {
    let oldId = this.currentViewerImageId;
    // Remove the 'opaque' class
    $('#locationBackground'+oldId).removeClass('opaque');

    // Add 'opaque' class to current hovering location image
    this.currentViewerImageId = id;
    $('#locationBackground'+id).addClass('opaque');
  }

  /**
   *
   * React Lifecycle functions
   *
   */
  componentDidUpdate(prevProps) {
    // New locations data received
    if (prevProps.locations !== this.props.locations) {
      // Add 'opaque class' to the first location
      const firstLocation = this.props.locations[0].id;
      const callFunction = () => (this.handleHoverLocation(firstLocation));
      setTimeout(callFunction
      , 100);
    }
  }

  render() {
    let { loading, locations, error } = this.props;
    let bShowError = false;
    if (error !== null) {
      bShowError = true;
      loading = true;
    }

    let defaultViewerClass = "default-viewer";
    if (loading === false) {
      defaultViewerClass = "default-viewer hide"
    }

    return(
      <div className="locations-section">
        <Container>
          <div className="section-title">
            {sectionTitle}
          </div>
        </Container>
        <div className="locations-container">
          <div className={defaultViewerClass}>
            <img src={defaultLocation} />
            <div className="scale-loader-container">
              <AlignItemCenter className="scale-loader">
                <ScaleLoader
                  color={'#fff'}
                  loading={loading}
                />
                { bShowError?(<div className="location-loading-error-text">Something went wrong!</div>):('')}
              </AlignItemCenter>
            </div>
          </div>
          <div className="locations-viewer" style={{visibility: loading?'hidden':'visible'}} ref={(ref)=>{this.locationViewer = ref}}>
            <div className="image-transitions-container">
              {this.renderLocationImages(locations)}
            </div>
            <div className="locations-data-container">
              <AlignItemCenter className="w-100">
                <Container>
                  <Row>
                    {this.renderLocationTextClip(locations)}
                  </Row>
                </Container>
              </AlignItemCenter>
            </div>
            <div className="locations-data-container-tablet">
              {this.renderLocationClip(locations)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    loading: state.homeScene.loading,
    locations: state.homeScene.homeDynamicInfos.locations,
    error: state.homeScene.error
  }),
  null,
)(Locations);