import React from 'react';
import PropTypes from 'prop-types';

import BwkzButton from '../../../components/BwkzButton/BwkzButton';

import config from '../../../config';

import {
  BwkzCarouselSlide,
  BwkzCarouselSlideInner,
  BwkzCarouselSlideBody,
  BwkzCarouselSlideCta,
} from './BwkzCarouselSlide.styled';

const BwkzCarouselSlideComponent = ({
  bodyContent,
  ctaText,
  ctaLink,
  offset,
  ...styles
}) => {
  const onClickCta = () => {
    if (!ctaText) {
      window.open(ctaLink, '_blank');
    }
  };

  return (
    <BwkzCarouselSlide
      bodyHorizontalPosition={styles.bodyHorizontalPosition}
      dotsVerticalPosition={styles.dotsVerticalPosition}
      offset={offset}
    >
      <BwkzCarouselSlideInner
        minHeight={styles.minHeight}
        backgroundColor={styles.backgroundColor}
        backgroundImage={styles.backgroundImage}
        onClick={onClickCta}
      >
        {bodyContent && (
          <BwkzCarouselSlideBody
            backgroundColor={styles.bodyBackgroundColor}
            position={styles.bodyHorizontalPosition}
            dangerouslySetInnerHTML={{ __html: bodyContent }}
            offset={offset}
          />
        )}
        {ctaText && ctaLink && (
          <BwkzCarouselSlideCta
            position={styles.ctaHorizontalPosition}
          >
            <BwkzButton
              borderColor="transparent"
              borderRadius={0}
              href={ctaLink}
              color={styles.ctaColor}
              backgroundColor={styles.ctaBackgroundColor}
            >
              {ctaText}
            </BwkzButton>
          </BwkzCarouselSlideCta>
        )}
      </BwkzCarouselSlideInner>

    </BwkzCarouselSlide>
  );
};

BwkzCarouselSlideComponent.defaultProps = {
  backgroundColor: '',
  backgroundImage: '',
  minHeight: '480px',
  offset: '0',

  bodyContent: '',
  bodyHorizontalPosition: 'left',
  bodyBackgroundColor: 'rgba(0, 0, 0, 0.5)',

  ctaText: '',
  ctaLink: '',
  ctaColor: '#fff',
  ctaBackgroundColor: '#8443b9',
  ctaHorizontalPosition: 'middle',

  dotLabel: 'Slide',
};

BwkzCarouselSlideComponent.propTypes = {
  /** Background color of the slide */
  backgroundColor: PropTypes.string,
  /** Background image of the slide */
  backgroundImage: PropTypes.string,
  /** Minimal height of the slide */
  minHeight: PropTypes.string,
  /** Height offset of the slide */
  offset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  /** Inner content of the body */
  bodyContent: PropTypes.string,
  /** Horizontal position of the body: 'left', 'middle' or 'right' */
  bodyHorizontalPosition: PropTypes.oneOf([
    config.positions.left,
    config.positions.right,
    config.positions.middle,
  ]),
  /** Backgroung color of the body */
  bodyBackgroundColor: PropTypes.string,

  /** Text of the CTA button */
  ctaText: PropTypes.string,
  /** Target link of the CTA button */
  ctaLink: PropTypes.string,
  /** Color of the CTA button */
  ctaColor: PropTypes.string,
  /** Background color of the CTA button */
  ctaBackgroundColor: PropTypes.string,
  /** Horizontal position of the CTA button: 'left', 'middle' or 'right' */
  ctaHorizontalPosition: PropTypes.oneOf([
    config.positions.left,
    config.positions.right,
    config.positions.middle,
  ]),

  /** Label of the dot that will be direct to the slider */
  dotLabel: PropTypes.string,
};

export default BwkzCarouselSlideComponent;
