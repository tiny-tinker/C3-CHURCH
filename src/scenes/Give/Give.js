import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import giveBg from './images/give-bg.jpg';
import './give.css';

/**
 *
 * setup vars
 */
const title = 'give';
const description =
  'We would love to have you join us in our mission of finding people outside church, bringing them inside and helping them become who they were born to be. Your generosity enables us to help more and more people encounter the presence of God and discover His purpose for their lives. We are truly grateful for your gift and hope the convenience and simplicity of online giving will be helpful to you.\n';
const thankYou = 'Thank you for your support.';
const wePartnered =
  'We have partnered with Tithe.ly to provide online giving options.';

class Give extends React.Component {
  render() {
    return (
      <div className="give-scene">
        <img src={giveBg} />
        <Container>
          <Row>
            <Col xs={12} lg={{ offset: 2, size: 8 }}>
              <div className="give-card">
                <div className="give-card-title">
                  {title}
                  <i className="fa fa-plus-circle" />
                </div>
                <div className="give-card-description">{description}</div>
                <div className="thank-you">{thankYou}</div>
                <div className="button-give">GIVE NOW</div>
                <div className="partnered">{wePartnered}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Give;
