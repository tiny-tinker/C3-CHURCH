import React from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScaleLoader } from 'react-spinners';
import AudioPlayer from '../components/AudioPlayer/AudioPlayer';
import './media.css';

import headerImg from './images/media-header.jpg';
import logo from '../../assets/images/c3.png';

/**
 * Import dispatch actions
 */
import { getPodcasts } from '../../services/api/podcasts/podcastActions';
import moment from 'moment/moment';

const loadingFailed = 'Loading medias failed!';

class Media extends React.Component {
  constructor(props) {
    super(props);
    this.props.podcastsAction.getPodcasts();
  }

  /**
   *
   * Custom render functions
   *
   */
  renderMedias(podcasts) {
    if (podcasts !== null) {
      return podcasts.map((m, index) => (
        <div className="podcast-card" key={index}>
          <div className="podcast-infos">
            <div className="podcast-title">{m.author + ' - ' + m.title}</div>
            <div className="podcast-date">
              {moment(m.dateof).format('MMMM D, YYYY')}
            </div>
          </div>
          <AudioPlayer theme="dark" audio={m.podcast_file_path} />
        </div>
      ));
    }
  }

  render() {
    let { podcasts, loading, error } = this.props;
    console.log('loading here');
    console.log(loading);
    let bShowError = false;
    // If error then show the loading bar
    if (error !== null) {
      bShowError = true;
      loading = true;
    }

    const headPodcast = podcast => (
      <React.Fragment>
        <div className="podcast-info-container">
          <div className="head-podcast-title">
            {podcast.author + ' - ' + podcast.title}
          </div>
          <div className="head-podcast-date">
            {moment(podcast.dateof).format('MMMM D, YYYY')}
          </div>
        </div>
        <AudioPlayer audio={podcast.podcast_file_path} />
      </React.Fragment>
    );

    return (
      <div className="media-scene">
        <div className="media-scene-header">
          <img src={headerImg} />
          <div className="logo-media-container">
            {loading === false ? (
              <div className="logo-container">
                <img src={logo} />
                <span className="media-header-title">C H U R C H</span>
              </div>
            ) : (
              ''
            )}
            <Container>
              {loading === false ? (
                <div className="media-container">
                  {loading === false && podcasts !== null
                    ? headPodcast(podcasts[0])
                    : ''}
                </div>
              ) : (
                <div className="loading-container">
                  <ScaleLoader color={'#84A4C3'} loading={loading} />
                  {bShowError ? (
                    <div className="media-loading-error-text">
                      {loadingFailed}
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              )}
            </Container>
          </div>
        </div>
        {loading === false ? (
          <div className="podcasts-media-container">
            <Container>{this.renderMedias(podcasts)}</Container>
          </div>
        ) : (
          ' '
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.podcasts.loading,
    error: state.podcasts.error,
    podcasts: state.podcasts.podcasts
  }),
  dispatch => ({
    podcastsAction: bindActionCreators(
      {
        getPodcasts
      },
      dispatch
    )
  })
)(Media);
