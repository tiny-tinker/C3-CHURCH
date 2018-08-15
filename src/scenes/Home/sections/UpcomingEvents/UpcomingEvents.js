import React from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import Slider from 'react-slick';
import Event from '../../../components/Event/Event';
import './upcomingEvents.css';
import AlignItemCenter from '../../../components/AlignItemCenter/AlignItemCenter';

/**
 *
 * Setup vars
 *
 */
const sectionTitle = 'upcoming events';
const loadingFailed = 'Loading events failed!';
class UpcomingEvents extends React.Component {
  /**
   *
   * Custom Render functions
   */
  renderEvents(events) {
    if (events !== null) {
      return events.map(event => (
        <Event
          imageUrl={event.image_url}
          title={event.title}
          starttime={event.starttime}
        />
      ));
    }
  }

  render() {
    let { loading, events, error } = this.props;
    let bShowError = false;

    // If error then show the loading bar
    if (error !== null) {
      bShowError = true;
      loading = true;
    }

    // Check if loading...
    let loadingEventClass = 'loading-events-container';
    if (loading === false) {
      loadingEventClass = 'loading-events-container hide';
    }

    let slideCount = 0;
    if (events !== null) {
      slideCount = events.length;
    }
    let slideToShow = slideCount > 3 ? 3 : slideCount;
    // Events slider settings...
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: slideToShow,
      slidesToScroll: slideToShow,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: slideToShow,
            slidesToScroll: slideToShow,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: slideToShow,
            slidesToScroll: slideToShow,
            initialSlide: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="upcoming-events-section">
        <Container>
          <div className="section-title">{sectionTitle}</div>
          <div className={loadingEventClass}>
            <AlignItemCenter className="loading-events">
              <ScaleLoader color={'#84A4C3'} loading={loading} />
              {bShowError ? (
                <div className="location-loading-error-text">
                  {loadingFailed}
                </div>
              ) : (
                ''
              )}
            </AlignItemCenter>
          </div>
          <div className="events-containter">
            <Slider {...settings}>{this.renderEvents(events)}</Slider>
          </div>
        </Container>
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.locationsAndEvents.loading,
    events: state.locationsAndEvents.locationsAndEvents.featured,
    error: state.locationsAndEvents.error
  }),
  null
)(UpcomingEvents);
