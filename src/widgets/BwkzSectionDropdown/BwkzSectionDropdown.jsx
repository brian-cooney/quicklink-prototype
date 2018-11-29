import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  BwkzSectionWrapper,
  BwkzSectionHeader,
  BwkzSectionContent,
  BwkzSectionCaret,
} from './BwkzSectionDropdown.styled';

export default class BwkzSectionDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerOpen: props.open,
    };

    this.handleShowOptions = this.handleShowOptions.bind(this);
  }

  handleShowOptions() {
    const { containerOpen } = this.state;
    this.setState({
      containerOpen: !containerOpen,
    });
  }

  render() {
    const { headerText, children } = this.props;
    const { containerOpen } = this.state;
    return (
      <BwkzSectionWrapper>
        <BwkzSectionHeader onClick={this.handleShowOptions}>
          <BwkzSectionCaret />
          {headerText}
        </BwkzSectionHeader>
        <BwkzSectionContent show={containerOpen}>
          {children}
        </BwkzSectionContent>
      </BwkzSectionWrapper>
    );
  }
}

BwkzSectionDropdown.defaultProps = {
  headerText: 'Section',
  open: true,
};

BwkzSectionDropdown.propTypes = {
  /** The heading that will appear at the top of the section */
  headerText: PropTypes.string,
  /** Determins if the content when loaded is open or closed. Default is open */
  open: PropTypes.bool,

  children: PropTypes.oneOfType([
    PropTypes.node,
  ]).isRequired,
};
