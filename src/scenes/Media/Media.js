import React from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Audio from './components/Audio/Audio';
import './media.css';

import headerImg from './images/media-header.jpg';
import logo from '../../assets/images/c3.png';

/**
 * Import dispatch actions
 */
import { getPodcasts } from '../../services/api/podcasts/podcastActions';

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
        <Audio
          key={index}
          idflag={true}
          id={'audiosub_' + index}
          className="payler"
          title={m.author + ' - ' + m.title}
          src={m.podcast_file_path}
          date={m.dateof}
        />
      ));
    }
  }

  render() {
    const { podcasts } = this.props;
    return (
      <div className="media-scene">
        <div className="media-scene-header">
          <img src={headerImg} />
          <div className="media-scene-header-container">
            <Container>
              <div className="media-containers" />
            </Container>
          </div>
        </div>
        <div className="media-container">
          <Container>{this.renderMedias(podcasts)}</Container>
        </div>
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
