import React, { Component } from 'react';

import BwkzQuickLinksComponent from './widgets/BwkzQuickLinks/BwkzQuickLinks_rows';
import BwkzQuickLinkItem from './widgets/BwkzQuickLinks/_BwkzQuickLinkItem/BwkzQuickLinkItem';
import BwkzContainer from './components/BwkzContainer/BwkzContainer';

import { BwkzQuickLinksRow } from './widgets/BwkzQuickLinks/bwkzQuickLinks.styled';

class App extends Component {
  render() {
    return (
      <BwkzContainer>
        <BwkzQuickLinksComponent>
          <BwkzQuickLinksRow>
            <BwkzQuickLinkItem />
            <BwkzQuickLinkItem />
            <BwkzQuickLinkItem />
            <BwkzQuickLinkItem />
          </BwkzQuickLinksRow>
        </BwkzQuickLinksComponent>
        <BwkzQuickLinksComponent>
          <BwkzQuickLinksRow>
            <BwkzQuickLinkItem />
            <BwkzQuickLinkItem />
            <BwkzQuickLinkItem />
          </BwkzQuickLinksRow>
        </BwkzQuickLinksComponent>
      </BwkzContainer>
    );
  }
}

export default App;
