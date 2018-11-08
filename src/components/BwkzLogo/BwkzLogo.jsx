import React from 'react';
import propTypes from 'prop-types';

import {
  BwkzLogoImage,
  BwkzLogoLink,
} from './BwkzLogo.styled';

const BwkzLogoComponent = ({
  imgSrc,
  link,
  height,
  ...styles
}) => (
  <BwkzLogoLink href={link} {...styles}>
    <BwkzLogoImage src={imgSrc} height={height} />
  </BwkzLogoLink>
);

BwkzLogoComponent.defaultProps = {
  imgSrc: 'https://www.brandworkz.com/wp-content/uploads/2016/11/Brandworkz-Logo.png',
  link: '/BMS/',
  height: 'auto',
};

BwkzLogoComponent.propTypes = {
  imgSrc: propTypes.string,
  link: propTypes.string,
  height: propTypes.string,
};

export default BwkzLogoComponent;
