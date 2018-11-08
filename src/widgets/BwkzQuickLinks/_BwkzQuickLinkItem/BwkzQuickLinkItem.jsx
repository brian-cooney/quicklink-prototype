import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BwkzButtonComponent from '../../../components/BwkzButton/BwkzButton';

import {
  BwkzQuickLinks,
  BwkzQuickLinksCol,
  BwkzQuickLinksCard,
  BwkzQuickLinksImage,
  BwkzQuickLinksCardContent,
  BwkzQuickLinksCardTitle,
  BwkzQuickLinksCardText,
} from '../bwkzQuickLinks.styled';

const BwkzQuickLinkItem = props => {
  return (
    <BwkzQuickLinksCol>
      <BwkzQuickLinksCard>
        <BwkzQuickLinksImage backgroundImage="https://unsplash.it/800/600?image=46" />
        <BwkzQuickLinksCardContent>
          <BwkzQuickLinksCardTitle
            headingColor="blue"
            dangerouslySetInnerHTML={{ __html: '<h1>Logo</h1>' }}
          />
          <BwkzQuickLinksCardText
            descriptionColour="blue"
            dangerouslySetInnerHTML={{ __html: '<p>this is test</p>' }}
          />
          <BwkzButtonComponent
            borderColor="#fff"
            borderRadius="1em"
            backgroundColor="blue"
            color="#E04B69"
            lineHeight="3"
            icon=""
          >
            Test
          </BwkzButtonComponent>
        </BwkzQuickLinksCardContent>
      </BwkzQuickLinksCard>
    </BwkzQuickLinksCol>
  );
};

BwkzQuickLinks.propTypes = {
  data: PropTypes.shape({
    quickLinks: PropTypes.shape({
      id: PropTypes.number.isRequired,
      heading: PropTypes.number,
      headingColor: PropTypes.string,
      backgroundColor: PropTypes.number,
      backgroundImage: PropTypes.string,
      buttonBackgroundColor: PropTypes.string,
      buttonText: PropTypes.string,
      buttonTextColor: PropTypes.string,
      containerColor: PropTypes.string,
      containerImage: PropTypes.string,
      description: PropTypes.string,
      descriptionColour: PropTypes.string,
    }),
  }),
};

export default BwkzQuickLinkItem;
