import React from 'react';
import PropTypes from 'prop-types';

import BwkzButton from '../../components/BwkzButton/BwkzButton';

import {
  BwkzQuickLinksCol,
  BwkzQuickLinksCard,
  BwkzQuickLinksImage,
  BwkzQuickLinksCardContent,
  BwkzQuickLinksCardTitle,
  BwkzQuickLinksCardText,
} from './BwkzQuickLinks.styled';

const BwkzQuickLinkItemComponent = (props) => {
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
    imagePaddingHeight,
    boxshadow,
  } = props;
  return (
    <BwkzQuickLinksCol cardItemWidth={cardItemWidth}>
      <BwkzQuickLinksCard boxshadow={boxshadow}>
        <BwkzQuickLinksImage
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
      </BwkzQuickLinksCard>
    </BwkzQuickLinksCol>
  );
};

export default BwkzQuickLinkItemComponent;

BwkzQuickLinkItemComponent.defaultProps = {
  backgroundImage: '',
  heading: '',
  headingColor: '#000',
  description: '',
  descriptionColour: '#000',
  buttonText: '',
  buttonBackgroundColor: '#eee',
  buttonTextColor: '#fff',
  buttonBorderColor: '',
  buttonRadius: '5px',
  cardItemWidth: '',
  imagePaddingHeight: '',
  boxshadow: '0 20px 40px -14px rgba(0, 0, 0, 0.25)',
};

BwkzQuickLinkItemComponent.propTypes = {
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
  /** Card Coloum width */
  imagePaddingHeight: PropTypes.string,
  /** Card boxshadow */
  boxshadow: PropTypes.string,
};
