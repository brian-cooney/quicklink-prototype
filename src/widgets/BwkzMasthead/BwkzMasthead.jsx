import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'rebass';

import {
  BwkzLogo,
} from '../../components';
import BwkzSearchBar from '../BwkzSearchBar/BwkzSearchBar';

const BwkzMastheadComponent = ({
  logoSrc,
  logoLink,
  searchPlaceholderText,
  searchButtonPosition,
  ...styles
}) => (
  <Flex flexWrap="wrap">
    <Box width={[1, 1, 1 / 4]}>
      <BwkzLogo
        imgSrc={logoSrc}
        link={logoLink}
        height={styles.logoHeight}
        padding={styles.logoPadding}
        margin={styles.logoMargin}
      />
    </Box>
    <Box width={[1, 5 / 6, 1 / 2]}>
      <BwkzSearchBar
        backgroundColor="transparent"
        searchButtonBackgroundColor="transparent"
        searchBackgroundColor="transparent"
        searchTextColor="#333"
        borderColor="#ccc"
        textColor="#333"
      />
    </Box>
    <Box width={[1, 1 / 6, 1 / 4]}>
                Profile drop down
    </Box>
  </Flex>
);

BwkzMastheadComponent.defaultProps = {

  backgroundColor: 'transparent',
  backgroundImage: null,

  logoSrc: 'https://www.brandworkz.com/wp-content/uploads/2016/11/Brandworkz-Logo.png',
  logoLink: '/BMS/',
  logoHeight: 'auto',
  logoPadding: '0',
  logoMargin: '10px',

  searchBackgroundColor: '#fff',
  searchTextColor: '#495057',
  searchButtonColor: '#495057',
  searchButtonBackgroundColor: '#fff',
  searchButtonPosition: 'left',
  searchPlaceholderText: 'Search...',
  searchPlaceholderColor: '',
  searchButtonIcon: 'bwkz-outline-icon-search',
  searchBorderRadius: '.25em',
  searchBorderColor: '#fff',
};

BwkzMastheadComponent.propTypes = {
  /** The background colour of the main container */
  backgroundColor: PropTypes.string,
  /** The background image link of the main container */
  backgroundImage: PropTypes.string,

  logoSrc: PropTypes.string,
  logoLink: PropTypes.string,
  /** The height of the image */
  logoHeight: PropTypes.string,
  logoPadding: PropTypes.string,
  logoMargin: PropTypes.string,

  searchBorderRadius: PropTypes.string,
  searchButtonColor: PropTypes.string,
  searchButtonBackgroundColor: PropTypes.string,
  searchBorderColor: PropTypes.string,
  searchBackgroundColor: PropTypes.string,
  searchTextColor: PropTypes.string,
  /** Available options are 'left' and 'right' */
  searchButtonPosition: PropTypes.oneOf([
    'left',
    'right',
  ]),
  searchPlaceholderText: PropTypes.string,
  searchPlaceholderColor: PropTypes.string,
  /** The icons available are within our icon pack */
  searchButtonIcon: PropTypes.string,
};

export default BwkzMastheadComponent;
