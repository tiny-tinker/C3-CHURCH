import React from 'react';
import { Container, Row, Col, Collapse } from 'reactstrap';
import giveBg from './images/give-bg.jpg';
import './give.css';

/**
 *
 * setup vars
 */
const title = 'GIVE';
const description =
  'We would love to have you join us in our mission of finding people outside church, bringing them inside and helping them become who they were born to be. Your generosity enables us to help more and more people encounter the presence of God and discover His purpose for their lives. We are truly grateful for your gift and hope the convenience and simplicity of online giving will be helpful to you.\n';
const thankYou = 'Thank you for your support.';
const wePartnered =
  'We have partnered with Tithe.ly to provide online giving options.';

class Give extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  componentDidMount() {
    window.create_tithely_widget();
  }
  render() {
    const btnGive = {
      padding: '20px',
      background: '#84A4C3',
      color: 'white',
      cursor: 'pointer',
      width: '150px',
      webkitAppearance: 'none',
      boxShadow: 'none',
      border: 'none'
    };
    return (
      <div className="give-scene">
        <img src={giveBg} />
        <Container>
          <Row>
            <Col xs={12} lg={{ offset: 2, size: 8 }}>
              <div className="give-card">
                <div className="give-card-title">
                  <a onClick={this.toggle}>
                    {title}
                    {this.state.collapse ? (
                      <i className="fa fa-minus-circle" />
                    ) : (
                      <i className="fa fa-plus-circle" />
                    )}
                  </a>
                </div>
                <Collapse isOpen={this.state.collapse}>
                  <div className="give-card-description">{description}</div>
                </Collapse>
                <div className="thank-you">{thankYou}</div>
                <button
                  className="tithely-give-btn"
                  style={btnGive}
                  data-church-id="10826"
                >
                  GIVE NOW
                </button>
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
