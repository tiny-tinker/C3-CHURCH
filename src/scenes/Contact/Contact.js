import React from 'react';
import { Container, Row, Col, Input, Form, FormGroup, Label } from 'reactstrap';
import './contact.css';
import backgroundImage from './images/contact-bg.jpg';

/**
 * Setup Vars
 */
const title = 'CONTACT US';
const description = 'We are here to answer any questions you may have.';
const phoneNum = '250-717-7265';
const email = 'info@c3church.ca';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   *
   * Event handle functions
   */

  handleSubmit(event) {
    event.preventDefault();

    if (this.props.loading === true) return;

    const data = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      mailbody: this.state.mailbody
    };
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleChangeMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleSubmit(event) {
    //this.props.mailActions.postSendEmail()
    event.preventDefault();

    if (this.props.loading === true) return;

    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    //this.props.mailActions.postSendEmail(data);
  }

  render() {
    return (
      <div className="contact-scene">
        <img src={backgroundImage} />
        <Container>
          <Row>
            <Col
              sm={12}
              md={{ offset: 0, size: 7 }}
              lg={{ offset: 1, size: 6 }}
            >
              <div className="contact-us-card">
                <div className="contact-us-title">{title}</div>
                <div className="description">{description}</div>

                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="name">Name*</Label>
                    <Input
                      required
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={this.handleChangeName}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email*</Label>
                    <Input
                      required
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={this.handleChangeEmail}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="message">Message*</Label>
                    <Input
                      required
                      id="message"
                      rows="5"
                      type="textarea"
                      name="message"
                      placeholder="Message..."
                      onChange={this.handleChangeMessage}
                    />
                  </FormGroup>
                  <Input type="submit" className="submit-button">
                    Submit
                  </Input>
                </Form>
              </div>
            </Col>
            <Col sm={12} md="5" lg="4" className="contact-infos-container">
              <div className="contact-infos">
                <div className="phone">
                  <div className="icon-container">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="values">
                    <div>Phone:</div>
                    <div>{phoneNum}</div>
                  </div>
                </div>
                <div className="email">
                  <div className="icon-container">
                    <i className="fa fa-envelope-o" />
                  </div>
                  <div className="values">
                    <div>Email:</div>
                    <div>{email}</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
