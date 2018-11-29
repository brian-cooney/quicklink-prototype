import React from 'react';
import PropTypes from 'prop-types';

import BwkzQuickLinkItem from './BwkzQuickLinkItem';
import BwkzQuickLinkItemFull from './BwkzQuickLinkItemFull';
import { BwkzQuickLinks } from './BwkzQuickLinks.styled';
import BwkzContainer from '../../components/BwkzContainer/BwkzContainer';

const BwkzQuickLinksComponent = (props) => {
  const {
    children,

    ...styles
  } = props;
  return (
    <BwkzContainer
      backgroundColor={styles.containerBackgroundColor}
      backgroundImage={styles.containerBackgroundImage}
      horizontalPadding={styles.containerHorizontalPadding}
      minHeight={styles.containerMinHeight}
    >
      <BwkzQuickLinks>{children}</BwkzQuickLinks>
    </BwkzContainer>
  );
};

export default BwkzQuickLinksComponent;

export { BwkzQuickLinksComponent as BwkzQuickLinks, BwkzQuickLinkItem, BwkzQuickLinkItemFull };

BwkzQuickLinksComponent.defaultProps = {
  containerBackgroundColor: 'transparent',
  containerBackgroundImage: '',
  containerMinHeight: '480px',
  containerHorizontalPadding: '100px',
};

BwkzQuickLinksComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
  /** The background colour of the main container */
  containerBackgroundColor: PropTypes.string,
  /** THhe background image of the main container */
  containerBackgroundImage: PropTypes.string,
  containerHorizontalPadding: PropTypes.string,
  containerMinHeight: PropTypes.string,
};
