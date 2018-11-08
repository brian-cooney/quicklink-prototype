import React, { Component } from 'react';

import BwkzContainer from '../../components/BwkzContainer/BwkzContainer';
import { BwkzQuickLinks } from './bwkzQuickLinks.styled';

class BwkzQuickLinksComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <BwkzQuickLinks>{this.props.children}</BwkzQuickLinks>;
  }
}

export default BwkzQuickLinksComponent;
