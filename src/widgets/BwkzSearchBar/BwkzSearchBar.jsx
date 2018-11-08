import React from 'react';
import PropTypes from 'prop-types';

import {
  BwkzButton,
  BwkzInput,
  BwkzContainer,
} from '../../components';

import {
  BwkzSearchBar,
  BwkzSearchBarForm,
  BwkzSearchBarText,
  BwkzSearchBarInput,
} from './BwkzSearchBar.styled';

const BwkzSearchBarComponent = ({
  topText,
  bottomText,
  searchFieldPlaceholderText,
  searchButtonPosition,
  ...styles
}) => {
  const withSeparator = styles.searchButtonBackgroundColor === styles.searchFieldBackgroundColor;

  const CustomBwkzButton = (
    <BwkzButton
      borderColor={styles.searchBorderColor}
      borderRadius={styles.searchBorderRadius}
      backgroundColor={styles.searchButtonBackgroundColor}
      color={styles.searchButtonColor}
      icon={styles.searchButtonIcon}
      lineHeight={styles.searchLineHeight}
      position={searchButtonPosition}
      withSeparator={withSeparator}
    />
  );
  const CustomBwkzInput = (
    <BwkzInput
      borderRadius={styles.searchBorderRadius}
      borderColor={styles.searchBorderColor}
      backgroundColor={styles.searchFieldBackgroundColor}
      color={styles.searchFieldTextColor}
      placeholderColor={styles.searchFieldPlaceholderColor}
      placeholder={searchFieldPlaceholderText}
      lineHeight={styles.searchLineHeight}
      position={searchButtonPosition === 'left' ? 'right' : 'left'}
    />
  );

  return (
    <BwkzContainer
      backgroundColor={styles.containerBackgroundColor}
      backgroundImage={styles.containerBackgroundImage}
      horizontalPadding={styles.containerHorizontalPadding}
      minHeight={styles.containerMinHeight}
    >
      <BwkzSearchBar
        innerPadding={styles.innerPadding}
        innerBackgroundColor={styles.innerBackgroundColor}
        innerBorderTopLeftRadius={styles.innerBorderTopLeftRadius}
        innerBorderTopRightRadius={styles.innerBorderTopRightRadius}
        innerBorderBottomRightRadius={styles.innerBorderBottomRightRadius}
        innerBorderBottomLeftRadius={styles.innerBorderBottomLeftRadius}
      >
        <BwkzSearchBarForm>
          {topText && (
            <BwkzSearchBarText
              color={styles.textColor}
              dangerouslySetInnerHTML={{ __html: topText }}
            />
          )}

          {searchButtonPosition === 'left' ? (
            <BwkzSearchBarInput>
              {CustomBwkzButton}
              {CustomBwkzInput}
            </BwkzSearchBarInput>
          ) : (
            <BwkzSearchBarInput>
              {CustomBwkzInput}
              {CustomBwkzButton}
            </BwkzSearchBarInput>
          )}

          {bottomText && (
            <BwkzSearchBarText
              color={styles.textColor}
              dangerouslySetInnerHTML={{ __html: bottomText }}
            />
          )}
        </BwkzSearchBarForm>
      </BwkzSearchBar>
    </BwkzContainer>
  );
};

BwkzSearchBarComponent.defaultProps = {
  containerBackgroundColor: 'transparent',
  containerBackgroundImage: '',
  containerMinHeight: '0',
  containerHorizontalPadding: '0',

  innerBackgroundColor: 'transparent',
  innerPadding: '0',
  innerBorderTopLeftRadius: '0',
  innerBorderTopRightRadius: '0',
  innerBorderBottomRightRadius: '0',
  innerBorderBottomLeftRadius: '0',

  searchBorderRadius: '.25em',
  searchBorderColor: '',
  searchLineHeight: '45px',
  searchFieldBackgroundColor: '#eee',
  searchFieldTextColor: '#000',
  searchFieldPlaceholderText: 'Search...',
  searchFieldPlaceholderColor: '',
  searchButtonPosition: 'left',
  searchButtonColor: '#000',
  searchButtonBackgroundColor: '#eee',
  searchButtonIcon: 'bwkz-filled-icon-search',

  topText: '',
  bottomText: '',
  textColor: '#333',
};

BwkzSearchBarComponent.propTypes = {
  /** Background colour of the main container */
  containerBackgroundColor: PropTypes.string,
  /** Background image link of the main container */
  containerBackgroundImage: PropTypes.string,
  /** Minimal height of the main container on desktop devices */
  containerMinHeight: PropTypes.string,
  /** Horizontal padding of the main container on desktop devices */
  containerHorizontalPadding: PropTypes.string,

  /** Background colour of the inner container */
  innerBackgroundColor: PropTypes.string,
  /** Padding of the inner container */
  innerPadding: PropTypes.string,
  /** Top-left border radius of the inner container */
  innerBorderTopLeftRadius: PropTypes.string,
  /** Top-right border radius of the inner container */
  innerBorderTopRightRadius: PropTypes.string,
  /** Bottom-left border radius of the inner container */
  innerBorderBottomLeftRadius: PropTypes.string,
  /** Bottom-right border radius of the inner container */
  innerBorderBottomRightRadius: PropTypes.string,

  /** Border radius of the search field and button */
  searchBorderRadius: PropTypes.string,
  /** Border color of the search field and button */
  searchBorderColor: PropTypes.string,
  /** Line height of the search field */
  searchLineHeight: PropTypes.string,
  /** Background color of the search field */
  searchFieldBackgroundColor: PropTypes.string,
  /** Color of the search field */
  searchFieldTextColor: PropTypes.string,
  /** Placeholder text value of the search field */
  searchFieldPlaceholderText: PropTypes.string,
  /** Placeholder text color of the search field */
  searchFieldPlaceholderColor: PropTypes.string,
  /** Position of the search button: 'left' or 'right' */
  searchButtonPosition: PropTypes.oneOf([
    'left',
    'right',
  ]),
  /** Color of the search button */
  searchButtonColor: PropTypes.string,
  /** Background color of the search button */
  searchButtonBackgroundColor: PropTypes.string,
  /** The icons available are within our icon pack */
  searchButtonIcon: PropTypes.string,

  /** Formatted as HTML is placed on the top of the inner container */
  topText: PropTypes.string,
  /** Formatted as HTML is placed on the bottom of the inner container */
  bottomText: PropTypes.string,
  /** Color of the top and bottom custom text blocks */
  textColor: PropTypes.string,
};

export default BwkzSearchBarComponent;
