const lightThemeColor = '#fff';
const blackThemeColor = '#aaa';

const style = theme => ({
  thumbLight: {
    backgroundColor: lightThemeColor
  },
  thumbDark: {
    backgroundColor: '#84A4C3'
  },
  trackBeforeLight: {
    height: '2px',
    background: 'linear-gradient(left,#0059FF,#09B1FA)'
  },
  trackAfterLight: {
    height: '2px',
    background: 'white',
    opacity: '0.7'
  },
  trackBeforeDark: {
    height: '2px',
    background: 'linear-gradient(left,#0059FF,#09B1FA)'
  },
  trackAfterDark: {
    height: '2px',
    background: 'black'
  },
  volumeTrackBeforeLight: {
    height: '2px',
    backgroundColor: 'linear-gradient(left,#0059FF,#09B1FA)'
  },
  volumeTrackAfterLight: {
    height: '2px',
    backgroundColor: '#fff'
  },
  volumeTrackBeforeDark: {
    height: '2px',
    backgroundColor: '#84A4C3'
  },
  volumeTrackAfterDark: {
    height: '2px',
    backgroundColor: '#707070'
  }
});

export default style;
