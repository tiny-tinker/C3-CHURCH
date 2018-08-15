import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import './welcome.css';

/**
 *
 * Import images
 *
 */
import image1 from './images/home-header-slider-1.jpg';
import image2 from './images/home-header-slider-2.jpg';
import image4 from './images/home-header-slider-4.jpg';
import image5 from './images/home-header-slider-5.jpg';
import image6 from './images/home-header-slider-6.jpg';
import image7 from './images/home-header-slider-7.jpg';
import image8 from './images/home-header-slider-8.jpg';
import logo from '../../../../assets/images/c3.png';
/**
 * Setup vars
 */
const items = [
  {
    src: image1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: image2,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: image4,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: image5,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: image6,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: image7,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: image8,
    altText: 'Slide 1',
    caption: 'Slide 1'
  }
];

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div className="carousel-img-container">
            <img src={item.src} alt={item.altText} />
          </div>
          <div className="logo-container">
            <img src={logo} />
          </div>
        </CarouselItem>
      );
    });

    return (
      <div className="welcome-section">
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
        </Carousel>
      </div>
    );
  }
}

export default Welcome;
