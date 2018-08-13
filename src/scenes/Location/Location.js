import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScaleLoader } from 'react-spinners';
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-slick';
import { MapWithAMarker } from '../components/GoogleMap/GoogleMap';
import DecorativeRectangleContainer from '../components/DecorativeRectangleContainer/DecorativeRectangleContainer';
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
import blurImg from '../../assets/images/blur.png';
import logo from '../../assets/images/c3.png';
import firstImage from '../../assets/images/temp/first-image.png';
import secondImage from '../../assets/images/temp/second-image.png';
import thirdImage from '../../assets/images/temp/third-image.png';
import Flipper from '../Home/sections/Introduction/components/Flipper/Flipper';
import Audio from '../Media/components/Audio/Audio';
import Event from '../components/Event/Event';

/**
 * Setup vars
 */
const imageFlippers = [
  {
    srcImage: firstImage,
    title: 'Live music',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.',
    isOccupySpace: true
  },
  {
    srcImage: secondImage,
    title: 'Good Coffee',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.',
    isOccupySpace: true
  },
  {
    srcImage: thirdImage,
    title: 'Useful Insights',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.',
    isOccupySpace: true
  }
];

class Location extends React.Component {
  constructor(props) {
    super(props);
    let location = props.match.params.location;
    props.locationActions.getLocationInfo(location);
  }
  renderEvents(events) {
    if (events !== null) {
      console.log('events data here');
      console.log(events.length);
      return events.map(event => (
        <Event
          imageUrl={event.image_url}
          title={event.title}
          starttime={event.starttime}
        />
      ));
    }
  }
  renderPodcasts(podcasts) {
    if (podcasts !== null) {
      return podcasts.map((m, index) => (
        <Audio
          key={index}
          idflag={true}
          id={'audiosub' + index}
          className="payler"
          title={m.author + '-' + m.title}
          src={m.podcast_file_path}
          date={m.dateof}
        />
      ));
    }
  }
  renderLocationInfo(locationInfo) {
    // Events slider settings...
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 3 > 2 ? 2 : 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 1
          }
        }
      ]
    };

    if (locationInfo !== null) {
      return (
        <div className="location-info-container">
          <div className="banner-image-container">
            <img
              src={locationInfo.location.photo_url}
              className="banner-image"
            />
            <img src={blurImg} className="blur-img" />
            <div className="logo-container align-item-container">
              <div className="align-item align-item-top" />
              <div className="align-item w-100">
                <p className="logo-img-container">
                  <img src={locationInfo.location.logo_url} alt="" />
                </p>
              </div>
              <div className="align-item align-item-bottom" />
            </div>
          </div>
          <Container>
            <DecorativeRectangleContainer>
              <div className="title">
                WELCOME TO C3 CHURCH {locationInfo.location.name}
              </div>
              <p
                className="description"
                dangerouslySetInnerHTML={{
                  __html: locationInfo.location.welcome
                }}
              />
              <Row>
                <Col md="12" lg="6">
                  <div className="location-profile">
                    <div className="pastor-photo-container">
                      <img
                        src={locationInfo.location.pastor_photo_url}
                        alt={locationInfo.location.pastor_photo_url}
                      />
                    </div>
                    <div className="profile-info">
                      <div className="pastor-name">
                        {locationInfo.location.pastor_name}
                      </div>
                      <div>Campus Pastors</div>
                      <div>C3 Church {locationInfo.location.name}</div>
                    </div>
                  </div>
                </Col>
                <Col md="12" lg="6">
                  <div className="location-social">
                    <div className="location-social-btns">
                      <a href={locationInfo.location.facebook}>
                        <i
                          className="fa fa-facebook-official"
                          aria-hidden="true"
                        />{' '}
                      </a>
                      <a href={locationInfo.location.twitter}>
                        <i className="fa fa-instagram" aria-hidden="true" />{' '}
                      </a>
                      <a href={locationInfo.location.instagram}>
                        <i className="fa fa-twitter" aria-hidden="true" />{' '}
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </DecorativeRectangleContainer>
            <div className="join-btn-container">
              <a href="#">
                JOIN US EVERY{' '}
                {locationInfo.location.day + ' ' + locationInfo.location.times}
              </a>
            </div>
            <Row>
              <Col xs="12" lg="4">
                <Flipper flipperInfo={imageFlippers[0]} />
              </Col>
              <Col xs="12" lg="4">
                <Flipper flipperInfo={imageFlippers[1]} />
              </Col>
              <Col xs="12" lg="4">
                <Flipper flipperInfo={imageFlippers[2]} />
              </Col>
            </Row>
            <div className="podcasts-container">
              <div className="title">LATEST PODCASTS</div>
              <div className="podcasts">
                {this.renderPodcasts(locationInfo.podcasts)}
              </div>
            </div>
            <div className="events-container">
              <Slider {...settings} slideCount={locationInfo.events.length}>
                {this.renderEvents(locationInfo.events)}
              </Slider>
            </div>
            <div className="service-time">
              <div className="title">SERVICE TIMES AND DIRECTIONS</div>
              <div className="service-time-infos">
                <Row>
                  <Col md="12" lg="5">
                    <div className="infos-section">
                      <div className="field">
                        <div className="icon-container">
                          <i className="fa fa-clock-o" />
                        </div>
                        <div className="values">
                          <div>Service Times:</div>
                          <div>
                            {locationInfo.location.day +
                              's at ' +
                              locationInfo.location.times}
                          </div>
                        </div>
                      </div>
                      <div className="field">
                        <div className="icon-container">
                          <i className="fa fa-home" />
                        </div>
                        <div className="values">
                          <div>Address:</div>
                          <div>
                            {locationInfo.location.address +
                              ', ' +
                              locationInfo.location.city +
                              ', ' +
                              locationInfo.location.province}
                          </div>
                        </div>
                      </div>
                      <div className="field">
                        <div className="icon-container">
                          <i className="fa fa-phone" />
                        </div>
                        <div className="values">
                          <div>Phone:</div>
                          <div>{locationInfo.location.phone}</div>
                        </div>
                      </div>
                      <div className="field">
                        <div className="icon-container">
                          <i className="fa fa-envelope" />
                        </div>
                        <div className="values">
                          <div>Email:</div>
                          <div>
                            {locationInfo.location.name + '@c3church.ca'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="12" lg="7">
                    <MapWithAMarker
                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAlhcI-WfSpG7oL07O4SRGVL_fM8HVJbBo&v=3.exp&libraries=geometry,drawing,places"
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `100%` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                      lat={locationInfo.location.latitude}
                      lng={locationInfo.location.longitude}
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
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
        {loading === false ? this.renderLocationInfo(locationInfo) : ''}
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
