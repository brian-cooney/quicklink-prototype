import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import transformator from '../../lib/transformator';
import carouselConfig from './BwkzCarousel.config';
import config from '../../config';

import BwkzArrow from '../../components/BwkzArrow/BwkzArrow';
import BwkzContainer from '../../components/BwkzContainer/BwkzContainer';
import BwkzCarouselSlide from './_BwkzCarouselSlide/BwkzCarouselSlide';

import {
  BwkzCarousel,
  BwkzCarouselDot,
} from './BwkzCarousel.styled';

class BwkzCarouselComponent extends Component {
  constructor(props) {
    super(props);

    const {
      dotsType,
      dotsHorizontalPosition,
      dotsVerticalPosition,
      autoplay,
      autoplaySpeed,
      arrows,
      arrowsColor,
      arrowsSize,
    } = this.props;
    const dotsClass = `slick-dots type-${dotsType}`;
    const dotsFlexPosition = transformator
      .transformHorizontalPositionToFlex(dotsHorizontalPosition);
    const offset = dotsVerticalPosition === config.positions.outside
      ? carouselConfig.slideBottomOffset
      : 0;

    this.state = {
      slickConfig: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass,
        autoplay,
        autoplaySpeed,
        arrows,
        prevArrow: <BwkzArrow
          position="left"
          color={arrowsColor}
          size={arrowsSize}
        />,
        nextArrow: <BwkzArrow
          position="right"
          color={arrowsColor}
          size={arrowsSize}
        />,
      },
      dotsHorizontalPosition: dotsFlexPosition,
      offset,
      childrenWithProps: props.children,
    };
  }

  componentDidMount() {
    const {
      children,
    } = this.props;
    const {
      offset,
    } = this.state;

    const dotsLabels = [];
    const childrenWithProps = React.Children.map(children, (child) => {
      dotsLabels.push(child.props.dotLabel);

      return React.cloneElement(child, {
        offset,
      });
    });

    this.setState(prevState => ({
      slickConfig: {
        ...prevState.slickConfig,
        customPaging: i => (
          <BwkzCarouselDot>{dotsLabels[i]}</BwkzCarouselDot>
        ),
      },
      childrenWithProps,
    }));
  }

  render() {
    const {
      slideMinHeight,
      slides,
      children,
      ...styles
    } = this.props;

    const {
      slickConfig,
      dotsHorizontalPosition,
      offset,
      childrenWithProps,
    } = this.state;

    return (
      <BwkzContainer
        backgroundColor={styles.containerBackgroundColor}
        backgroundImage={styles.containerBackgroundImage}
        minHeight={styles.containerMinHeight}
        horizontalPadding={styles.containerHorizontalPadding}
        offset={offset}
      >
        <BwkzCarousel
          dotsVerticalPosition={styles.dotsVerticalPosition}
          dotsHorizontalPosition={dotsHorizontalPosition}
          dotsInactiveColor={styles.dotsInactiveColor}
          dotsActiveColor={styles.dotsActiveColor}
          dotsFontSize={styles.dotsFontSize}
          offset={offset}
        >
          <Slider {...slickConfig}>
            {childrenWithProps}
          </Slider>
        </BwkzCarousel>
      </BwkzContainer>
    );
  }
}

BwkzCarouselComponent.defaultProps = {
  containerBackgroundColor: 'transparent',
  containerBackgroundImage: '',
  containerMinHeight: '480px',
  containerHorizontalPadding: '100px',

  dotsType: 'bars',
  dotsVerticalPosition: 'outside',
  dotsHorizontalPosition: 'middle',
  dotsInactiveColor: '#fff',
  dotsActiveColor: '#8443b9',
  dotsFontSize: '16px',

  autoplay: false,
  autoplaySpeed: 3000,

  arrows: true,
  arrowsColor: '#fff',
  arrowsSize: '24px',
};

BwkzCarouselComponent.propTypes = {
  /** Background colour of the main container */
  containerBackgroundColor: PropTypes.string,
  /** Background image link of the main container */
  containerBackgroundImage: PropTypes.string,
  /** Minimal height of the main container on desktop devices */
  containerMinHeight: PropTypes.string,
  /** Horizontal padding of the main container on desktop devices */
  containerHorizontalPadding: PropTypes.string,

  /** Type of the dots of the slider: 'dots', 'bars' or 'tabs' */
  dotsType: PropTypes.oneOf([
    'dots',
    'bars',
    'tabs',
  ]),
  /** Vertical position of the dots of the slider: 'inside' or 'outside' */
  dotsVerticalPosition: PropTypes.oneOf([
    config.positions.inside,
    config.positions.outside,
  ]),
  /** Horizontal position of the dots of the slider: 'left', 'middle' or 'right' */
  dotsHorizontalPosition: PropTypes.oneOf([
    config.positions.left,
    config.positions.right,
    config.positions.middle,
  ]),
  /** Color in inactive mode of the dots of the slider */
  dotsInactiveColor: PropTypes.string,
  /** Color in active mode of the dots of the slider */
  dotsActiveColor: PropTypes.string,
  /** Font size of the dots of the slider */
  dotsFontSize: PropTypes.string,

  /** Enable autoplay of the slider */
  autoplay: PropTypes.bool,
  /** Autoplay speed of the slider in milliseconds */
  autoplaySpeed: PropTypes.number,

  /** Enable arrows of the slider */
  arrows: PropTypes.bool,
  /** Color of the arrows of the slider */
  arrowsColor: PropTypes.string,
  /** Size of the arrows of the slider */
  arrowsSize: PropTypes.string,

  children: PropTypes.oneOfType([
    PropTypes.node,
  ]).isRequired,
};

export {
  BwkzCarouselSlide,
  BwkzCarouselComponent as BwkzCarousel,
};

export default BwkzCarouselComponent;
