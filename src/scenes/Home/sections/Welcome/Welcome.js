import React from 'react';
import './welcome.css';

/**
 *
 * Import images
 *
 */
import welcome from './images/welcome.jpg';
import welcomeMobile from './images/welcome-mobile.jpg';
import logo from '../../../../assets/images/c3.png';

class Welcome extends React.Component{
  render() {
    return (
      <div className="welcome-section">
        <img src={welcome} className="welcome-section-background"/>
        <img src={welcomeMobile} className="welcome-section-background-mobile"/>
        <div className="logo-container align-item-container">
          <div className="align-item align-item-top"/>
          <div className="align-item w-100">
            <p className="logo-img-container">
              <img src={logo}/>
              <span className="title-mobile">
                C H U R C H
              </span>
            </p>
          </div>
          <div className="align-item align-item-bottom">
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;