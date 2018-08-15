import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bShowMenu: false
    };

    /**
     * Bind functions
     */
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  /**
   *
   * Custom events handlers
   */
  showMenu(event) {
    event.preventDefault();

    this.setState({
      bShowMenu: true
    });

    // Set overflow setting of body 'hidden' to disable scrolling in mobile view when menu opened
    $('body').css('overflow', 'hidden');
  }

  hideMenu(event) {
    //event.preventDefault();

    this.setState({
      bShowMenu: false
    });

    // Set overflow setting of body 'auto' to enable scrolling in mobile view when menu closed
    $('body').css('overflow', 'auto');
  }

  render() {
    let menuContentContainer = 'menu-content-container';
    if (this.state.bShowMenu) {
      menuContentContainer = 'menu-content-container show';
    }
    return (
      <div className="menu-container">
        {!this.state.bShowMenu ? (
          <div className="menu-button-container" onClick={this.showMenu}>
            <span className="menu-letter">MENU</span>
            <i className="fa fa-bars" />
          </div>
        ) : null}
        {
          <div id="menu-content-container" className={menuContentContainer}>
            <div className="close-button" onClick={this.hideMenu}>
              <i className="fa fa-times" />
            </div>
            <ul>
              <li>
                <Link to="/" onClick={this.hideMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/visit" onClick={this.hideMenu}>
                  Visit
                </Link>
              </li>
              <li>
                <Link to="/give" onClick={this.hideMenu}>
                  Give
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={this.hideMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        }
      </div>
    );
  }
}

export default Menu;
