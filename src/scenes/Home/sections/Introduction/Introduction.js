import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import './introduction.css';

/**
 *
 * Import images
 *
 */
import firstImage from './images/first-image.jpg';
import secondImage from './images/second-image.jpg';
import thirdImage from './images/third-image.jpg';
import Flipper from "./components/Flipper/Flipper";

/**
 *
 * Setup vars
 *
 */

const title = 'WE\'RE STOKED YOU\'RE HERE';
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta augue sit amet nibh placerat, a hendrerit justo vestibulum. Suspendisse potenti. Sed facilisis varius sodales. Nulla ac mi neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam pulvinar tristique mauris cursus consectetur. Aliquam non pellentesque arcu. In pellentesque orci quis laoreet varius. Pellentesque in eros gravida, mollis nulla sed, tristique nisi. Nullam lacus lacus, posuere sit amet elit sit amet, elementum sagittis turpis. Maecenas varius, felis consectetur maximus porta, massa sapien volutpat nisl, iaculis malesuada leo felis sed mauris. Morbi sit amet leo enim. Praesent auctor faucibus lorem ac tincidunt. Fusce suscipit iaculis varius.';
const imageFlippers = [{
    srcImage: firstImage,
    title: 'Live music',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.',
    isOccupySpace: true
  },
  {
    srcImage: secondImage,
    title: 'Good Coffee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.',
    isOccupySpace: true
  },
  {
    srcImage: thirdImage,
    title: 'Useful Insights',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.',
    isOccupySpace: true
  }
];

class Introduction extends React.Component {
  render() {
    return (
      <div className="introduction-section">
        <Container>
          <div className="stocked-here">
            <div className="half-circle-container">
              <div className="half-circle"/>
            </div>
            <div className="title">
              {title}
            </div>
            <p className="description">
              {description}
            </p>
          </div>
          <div className="description-images-container">
            <Row>
              <Col xs="12" md="6" lg="4" className="first-image-container">
                <Flipper flipperInfo={imageFlippers[0]}/>
              </Col>
              <Col xs="12" md="6" lg="4" className="second-image-container">
                <Flipper flipperInfo={imageFlippers[1]}/>
              </Col>
              <Col xs="12" md="6" lg="4" className="third-image-container">
                <Flipper flipperInfo={imageFlippers[2]}/>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    )
  }
}

export default Introduction;