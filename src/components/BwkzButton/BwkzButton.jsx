import React from 'react';
import PropTypes from 'prop-types';

import {
  BwkzButton,
} from './BwkzButton.styled';

const BwkzButtonComponent = ({
  icon,
  children,
  position,

  ...styles
}) => (
  <BwkzButton {...styles} className={`position-${position}`}>
    {icon && <i className={icon} />}
    {children}
  </BwkzButton>
);

BwkzButtonComponent.defaultProps = {
  position: 'center',
  icon: '',

  borderColor: '#fff',
  borderRadius: '.25em',
  backgroundColor: '#8443b9',
  color: '#fff',
};

BwkzButtonComponent.propTypes = {
  /** The icons available are within our icon pack */
  icon: PropTypes.string,
  /** Available options are 'left', 'right', 'center' */
  position: PropTypes.oneOf([
    'left',
    'right',
    'center',
  ]),

  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

export default BwkzButtonComponent;
