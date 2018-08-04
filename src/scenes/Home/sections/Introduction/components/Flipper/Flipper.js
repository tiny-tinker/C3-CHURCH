import React from 'react';
import PropTypes from 'prop-types';
import './flipper.css';

class Flipper extends React.Component {
  render() {
    const {srcImage, title, description, isOccupySpace} = this.props.flipperInfo;
    return(
      <div className="flipper-image-container">
        {isOccupySpace?
          (<img src={srcImage} className="occupy-space"/>):''
        }
        <div className="flipper-card">
          <div className="front face">
            <img src={srcImage} />
            <div className="front-card-text-container">
              <div className="title">
                {title}
                <i className="fa fa-plus-circle"/>
              </div>
            </div>
          </div>
          <div className="back face center">
            <div className="mask"/>
            <img src={srcImage} />
            <div className="back-card-text-container">
              <div className="title">
                {title}
                <i className="fa fa-minus-circle"/>
              </div>
              <div className="description">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Flipper.propTypes = {
  flipperInfo: PropTypes.shape({
    srcImage: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isOccupySpace: PropTypes.boolean
  })
};

Flipper.defaultProps = {
  flipperInfo: {
    title: 'Title is here!',
    description: 'Description is here!',
    isOccupySpace: true
  }
};

export default Flipper;