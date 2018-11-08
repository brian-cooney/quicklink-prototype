import React, { Component } from 'react';
import PropTypes from 'prop-types';

import calculator from '../../lib/calculator';

import {
  BwkzContainer,
} from './BwkzContainer.styled';

class BwkzContainerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      verticalPadding: 0,
    };

    this.containerRef = React.createRef();
  }

  componentDidMount() {
    const {
      minHeight,
      offset,
    } = this.props;

    const verticalPadding = calculator
      .calculateVerticalPadding(this.containerRef.current.clientHeight - offset, minHeight);

    this.setState({ verticalPadding });
  }

  render() {
    const {
      children,

      ...styles
    } = this.props;

    const { verticalPadding } = this.state;

    return (
      <BwkzContainer
        backgroundColor={styles.backgroundColor}
        backgroundImage={styles.backgroundImage}
        horizontalPadding={styles.horizontalPadding}
        verticalPadding={verticalPadding}
        minHeight={styles.minHeight}

        ref={this.containerRef}
      >
        {children}
      </BwkzContainer>
    );
  }
}

BwkzContainerComponent.defaultProps = {
  backgroundColor: 'transparent',
  backgroundImage: '',
  minHeight: '',
  horizontalPadding: '10%',
  offset: 0,
};

BwkzContainerComponent.propTypes = {
  /** Background colour of the main container */
  backgroundColor: PropTypes.string,
  /** Background image link of the main container */
  backgroundImage: PropTypes.string,
  /** Minimal height of the main container on desktop devices */
  minHeight: PropTypes.string,
  /** Horizontal padding of the main container on desktop devices */
  horizontalPadding: PropTypes.string,
  /**
   * Offset of minimal height the main container
   * that will not be included in height height calculation
  */
  offset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  children: PropTypes.oneOfType([
    PropTypes.node,
  ]).isRequired,
};

export default BwkzContainerComponent;
