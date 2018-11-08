import React from 'react';
import PropTypes from 'prop-types';

import {
  BwkzButton,
  BwkzLink,
} from './BwkzButton.styled';

const BwkzButtonComponent = ({
  icon,
  children,
  position,
  href,
  target,

  ...styles
}) => {
  const Button = href ? BwkzLink : BwkzButton;

  return (
    <Button
      {...styles}
      className={`position-${position}`}
      href={href}
      target={target}
    >
      {icon && <i className={icon} />}
      {children}
    </Button>
  );
};

BwkzButtonComponent.defaultProps = {
  position: 'center',
  icon: '',
  href: '',
  target: '_blank',

  borderColor: '',
  borderRadius: '.25em',
  backgroundColor: '#eee',
  color: '#000',
  lineHeight: '45px',
  withSeparator: false,
};

BwkzButtonComponent.propTypes = {
  /** The icons available are within our icon pack */
  icon: PropTypes.string,
  /** Horizontal position: 'left', 'right' or 'center' */
  position: PropTypes.oneOf([
    'left',
    'right',
    'center',
  ]),
  /** Target link of the button */
  href: PropTypes.string,
  /** Type of the target link of the button */
  target: PropTypes.oneOf([
    '_blank',
    '_self',
    '_parent',
    '_top',
  ]),

  /** Border color of the button */
  borderColor: PropTypes.string,
  /** Border radius of the button */
  borderRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /** Background color of the button */
  backgroundColor: PropTypes.string,
  /** Color of the button */
  color: PropTypes.string,
  /** Line height of the button */
  lineHeight: PropTypes.string,
  /** Separator instead of a border */
  withSeparator: PropTypes.bool,

  children: PropTypes.oneOfType([
    PropTypes.node,
  ]).isRequired,
};

export default BwkzButtonComponent;
