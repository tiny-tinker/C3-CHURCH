import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import c3WhiteLogo from '../../../assets/images/c3.png';
import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col xs="12" md="4">
              <Row>
                <Col xs="12" md="4">
                  <div className="footer-logo align-item-container">
                    <div className="align-item align-item-top" />
                    <div className="align-item">
                      <img src={c3WhiteLogo} />
                    </div>
                    <div className="align-item align-item-bottom" />
                  </div>
                </Col>
                <Col xs="12" md="8">
                  <ul className="footer-menu-left">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/visit">Visit</Link>
                    </li>
                    <li>
                      <Link to="/give">Give</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col xs="12" md="4" className="footer-middle">
              <div className="align-item-container social-connect">
                <div className="align-item align-item-top" />
                <div className="align-item" />
                <div className="align-item align-item-bottom">
                  <a target="_blank" href="http://facebook.com/c3church.ca">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                  <a target="_blank" href="http://instagram.com/c3church_ca">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                  <a target="_blank" href="http://twitter.com/c3church_ca">
                    {' '}
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a href="mailto:info@c3church.ca">
                    <i className="fa fa-envelope-o" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Col>
            <Col xs="12" md="4">
              <ul className="footer-menu-right">
                <li>
                  <Link to="/media">Media</Link>
                </li>
                <li>
                  <a href="https://c3churchglobal.com/" target="_blank">
                    C3 Global
                  </a>
                </li>
                <li>
                  <Link to="/connect">Connect Groups</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
