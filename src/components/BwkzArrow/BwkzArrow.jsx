import React from 'react';
import PropTypes from 'prop-types';

import {
  BwkzArrow,
} from './BwkzArrow.styled';

const BwkzArrowComponent = ({
  position,

  ...styles
}) => {
  const icon = `bwkz-filled-icon-arrow-${position}-8`;

  return (
    <BwkzArrow {...styles}>
      <i className={icon} />
    </BwkzArrow>
  );
};

BwkzArrowComponent.defaultProps = {
  position: 'left',
  color: '#000',
  size: '24px',
};

BwkzArrowComponent.propTypes = {
  /** Position of the arrow: 'left' or 'right' */
  position: PropTypes.oneOf([
    'left',
    'right',
  ]),
  /** Color of the arrow */
  color: PropTypes.string,
  /** Size of the arrow */
  size: PropTypes.string,
};

export default BwkzArrowComponent;
