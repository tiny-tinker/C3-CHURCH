import React from 'react';
import PropTypes from 'prop-types';

/**
 * Import material-ui libraries
 */
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {
  PlayArrow,
  Pause,
  VolumeOff,
  VolumeMute,
  VolumeDown,
  VolumeUp
} from '@material-ui/icons';
import Slider from '@material-ui/lab/Slider';
import moment from 'moment';
import audioPlayerStyle from './audioPlayerStyle';
import './audioPlayer.css';
class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pause: false,
      volume: 0.6,
      audioPlayProgress: 0,
      currentPlayTime: 0,
      duration: 0,
      isMute: false,
      mutedVolume: 0, // store volume when muted
      volume: 100,
      canPlay: false
    };

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
    this.handleAudioSliderChange = this.handleAudioSliderChange.bind(this);
    this.loadedMetaData = this.loadedMetaData.bind(this);
    this.canPlay = this.canPlay.bind(this);
    this.audioEnded = this.audioEnded.bind(this);
    this.handleVolumeClick = this.handleVolumeClick.bind(this);
  }

  componentDidMount() {
    this.player.addEventListener('timeupdate', this.updateProgress);
    this.player.addEventListener('canPlay', this.canPlay);
    this.player.addEventListener('loadedmetadata', this.loadedMetaData);
    this.player.addEventListener('ended', this.audioEnded);
  }

  componentWillUnmount() {
    this.player.removeEventListener('timeupdate', this.updateProgress);
    this.player.removeEventListener('canPlay', this.canPlay);
    this.player.removeEventListener('loadedmetadata', this.loadedMetaData);
    this.player.removeEventListener('ended', this.audioEnded);
  }

  /**
   *
   * Event handle functions
   */

  handlePlay() {
    this.setState(
      {
        pause: true
      },
      () => this.player.play()
    );
  }

  handlePause() {
    this.setState(
      {
        pause: false
      },
      () => this.player.pause()
    );
  }

  updateProgress() {
    let current = this.player.currentTime;
    let percent = (current / this.player.duration) * 100;
    this.setState({
      audioPlayProgress: percent,
      currentPlayTime: current
    });
  }

  updateVolume(event, value) {
    if (this.state.canPlay === false) {
      return;
    }
    this.player.volume = value / 100;
    this.setState({
      volume: this.player.volume,
      isMute: false
    });
  }
  handleAudioSliderChange(event, value) {
    if (this.state.canPlay === false) {
      return;
    }
    this.player.currentTime = (this.player.duration * value) / 100;
    this.setState({
      audioPlayProgress: value,
      currentPlayTime: this.player.currentTime
    });
  }

  loadedMetaData() {
    this.setState({
      duration: this.player.duration,
      canPlay: true
    });
  }

  canPlay() {
    console.log('CAN PLAY CALLED');
    this.setState({
      canPlay: true
    });
  }

  audioEnded() {
    this.setState({
      pause: false
    });
  }

  handleVolumeClick() {
    if (this.state.canPlay === false) {
      return;
    }
    if (this.state.isMute === false) {
      let mutedVolume = this.player.volume;
      this.player.volume = 0;
      this.setState({
        volume: 0,
        mutedVolume
      });
    } else {
      this.player.volume = this.state.mutedVolume;
      this.setState({
        volume: this.state.mutedVolume
      });
    }
    this.setState({
      isMute: !this.state.isMute
    });
  }
  render() {
    const { classes, audio, theme } = this.props;
    const playButton = (
      <IconButton className="control-button" onClick={this.handlePlay}>
        <PlayArrow />
      </IconButton>
    );

    const pauseButton = (
      <IconButton
        classes={{}}
        className="control-button"
        onClick={this.handlePause}
      >
        <Pause />
      </IconButton>
    );

    const volumeStausIcon = () => {
      if (this.state.isMute) {
        return <VolumeOff />;
      } else {
        if (this.state.volume <= 0.05) {
          return <VolumeMute />;
        } else if (this.state.volume <= 0.5 && this.state.volume > 0.05) {
          return <VolumeDown />;
        } else {
          return <VolumeUp />;
        }
      }
    };

    let slideThumbStyle,
      trackAfter,
      trackBefore,
      volumeTrackAfter,
      volumeTrackBefore;
    if (theme === 'light') {
      slideThumbStyle = classes.thumbLight;
      trackBefore = classes.trackBeforeLight;
      trackAfter = classes.trackAfterLight;
      volumeTrackAfter = classes.volumeTrackAfterLight;
      volumeTrackBefore = classes.volumeTrackBeforeLight;
    } else {
      slideThumbStyle = classes.thumbDark;
      trackBefore = classes.trackBeforeDark;
      trackAfter = classes.trackAfterDark;
      volumeTrackAfter = classes.volumeTrackAfterDark;
      volumeTrackBefore = classes.volumeTrackBeforeDark;
    }
    return (
      <div className={['audio-player-container', theme].join(' ')}>
        <audio crossOrigin ref={ref => (this.player = ref)}>
          <source src={audio} />
        </audio>
        {this.state.pause === false ? playButton : pauseButton}
        <span>
          <Typography className="time" variant="caption">
            {moment.utc(this.state.currentPlayTime * 1000).format('mm:ss')}
          </Typography>
        </span>
        <Slider
          value={this.state.audioPlayProgress}
          className="progress-slider"
          onChange={this.handleAudioSliderChange}
          classes={{
            thumb: slideThumbStyle,
            trackBefore,
            trackAfter
          }}
        />
        <span>
          <Typography className="time" variant="caption">
            {moment.utc(this.state.duration * 1000).format('mm:ss')}
          </Typography>
        </span>
        <IconButton className="control-button" onClick={this.handleVolumeClick}>
          {volumeStausIcon()}
        </IconButton>
        <Slider
          value={this.state.volume * 100}
          className="volume-slider"
          onChange={this.updateVolume}
          classes={{
            thumb: slideThumbStyle,
            trackBefore: volumeTrackBefore,
            trackAfter: volumeTrackAfter
          }}
        />
      </div>
    );
  }
}

AudioPlayer.propTypes = {
  classes: PropTypes.object.isRequired,
  audio: PropTypes.string.isRequired,
  theme: PropTypes.string
};

AudioPlayer.defaultProps = {
  theme: 'light'
};

export default withStyles(audioPlayerStyle)(AudioPlayer);
