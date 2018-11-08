import React from 'react';
import PropTypes from 'prop-types';

import {
  BwkzInput,
} from './BwkzInput.styled';

const BwkzInputComponent = ({
  placeholder,
  position,

  ...styles
}) => (
  <BwkzInput
    {...styles}
    className={`position-${position}`}
    placeholder={placeholder}
  />
);

BwkzInputComponent.defaultProps = {
  borderRadius: '.25em',
  borderColor: '',
  backgroundColor: '#eee',
  placeholderColor: '',
  lineHeight: '45px',

  placeholder: '',
  position: 'right',
};

BwkzInputComponent.propTypes = {
  borderRadius: PropTypes.string,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  placeholderColor: PropTypes.string,
  lineHeight: PropTypes.string,

  placeholder: PropTypes.string,
  position: PropTypes.oneOf([
    'left',
    'right',
    'center',
  ]),
};

export default BwkzInputComponent;
