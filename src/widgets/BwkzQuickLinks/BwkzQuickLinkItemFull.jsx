import React from 'react';
import PropTypes from 'prop-types';

import BwkzButton from '../../components/BwkzButton/BwkzButton';

import {
  BwkzQuickLinksCol,
  BwkzQuickLinksCardFullImage,
  BwkzQuickLinksFullImage,
  BwkzQuickLinksCardContent,
  BwkzQuickLinksCardTitle,
  BwkzQuickLinksCardText,
} from './BwkzQuickLinks.styled';

const BwkzQuickLinkItemFullComponent = (props) => {
  const {
    backgroundImage,
    heading,
    headingColor,
    description,
    descriptionColour,
    buttonText,
    buttonBackgroundColor,
    buttonTextColor,
    buttonBorderColor,
    buttonRadius,
    cardItemWidth,
    cardItemHeight,
    imagePaddingHeight,
  } = props;
  return (
    <BwkzQuickLinksCol cardItemWidth={cardItemWidth}>
      <BwkzQuickLinksCardFullImage
        backgroundImage={backgroundImage}
        cardItemHeight={cardItemHeight}
      >
        <BwkzQuickLinksFullImage
          backgroundImage={backgroundImage}
          imagePaddingHeight={imagePaddingHeight}
        />
        <BwkzQuickLinksCardContent>
          <BwkzQuickLinksCardTitle
            headingColor={headingColor}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <BwkzQuickLinksCardText
            descriptionColour={descriptionColour}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <BwkzButton
            borderColor={buttonBorderColor}
            borderRadius={buttonRadius}
            backgroundColor={buttonBackgroundColor}
            color={buttonTextColor}
            lineHeight="3"
          >
            {buttonText}
          </BwkzButton>
        </BwkzQuickLinksCardContent>
      </BwkzQuickLinksCardFullImage>
    </BwkzQuickLinksCol>
  );
};

export default BwkzQuickLinkItemFullComponent;

BwkzQuickLinkItemFullComponent.defaultProps = {
  backgroundImage: '',
  heading: '',
  headingColor: '',
  description: '',
  descriptionColour: '',
  buttonText: '',
  buttonBackgroundColor: '',
  buttonTextColor: '',
  buttonBorderColor: '',
  buttonRadius: '',
  cardItemWidth: '',
  cardItemHeight: '',
  imagePaddingHeight: '',
};

BwkzQuickLinkItemFullComponent.propTypes = {
  /** Background image of card item */
  backgroundImage: PropTypes.string,
  /** Card item heading */
  heading: PropTypes.string,
  /** Card item heading clour */
  headingColor: PropTypes.string,
  /** Card item description text */
  description: PropTypes.string,
  /** Card item description text colour */
  descriptionColour: PropTypes.string,
  /** Button text */
  buttonText: PropTypes.string,
  /** Button text background colour */
  buttonBackgroundColor: PropTypes.string,
  /** Button text colour */
  buttonTextColor: PropTypes.string,
  /** Button text border colour */
  buttonBorderColor: PropTypes.string,
  /** Button radius */
  buttonRadius: PropTypes.string,
  /** Card Coloum width */
  cardItemWidth: PropTypes.string,
  /** Card Height */
  cardItemHeight: PropTypes.string,
  /** image padding height */
  imagePaddingHeight: PropTypes.string,
};
