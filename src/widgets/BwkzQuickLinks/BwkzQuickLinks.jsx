import React, { Component } from "react";

import { BwkzQuickLinks } from "./BwkzQuickLinks.styled";

class BwkzQuickLinksComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;

    return <BwkzQuickLinks>{children}</BwkzQuickLinks>;
  }
}

export default BwkzQuickLinksComponent;
