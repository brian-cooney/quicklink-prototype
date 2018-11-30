import React, { Component } from "react";
import { Flex, Box } from "rebass";

import BwkzSelectionDropdown from "../../../BwkzSectionDropdown/BwkzSectionDropdown";

import BwkzInputGroupItem from "../../../BwkzInputGroupItem/BwkzInputGroupItem";
import BwkzQuickLinks from "../../../BwkzQuickLinks/BwkzQuickLinks";
import BwkzQuickLinkItem from "../../../BwkzQuickLinks/BwkzQuickLinkItem";
import { BwkzQuickLinksRow } from "../../../BwkzQuickLinks/BwkzQuickLinks.styled";

class LivePreview extends Component {
  state = {};
  render() {
    return (
      <BwkzSelectionDropdown headerText="Live Preview">
        <BwkzQuickLinks>
          <BwkzQuickLinksRow>
            <BwkzQuickLinkItem
              heading="<h2>Latest Assets</h2>"
              headingColor="#000"
              description="<p>Download any asset in any format</p>"
              descriptionColour="#000"
              buttonText="Brand"
              buttonBackgroundColor="#bfbaaf"
              buttonTextColor="#fff"
              buttonBorderColor=""
              buttonRadius=".3em"
              lineHeight="2"
              backgroundColor="#f3f3f3"
              backgroundImage="https://unsplash.it/800/600?image=46"
              cardItemWidth="40%"
              imagePaddingHeight="100%"
              boxShadow="0 20px 40px -14px rgba(0, 0, 0, 0.25)"
            />
            <BwkzQuickLinkItem
              heading="<h2>Our media library</h2>"
              headingColor="#000"
              description="<p>Our most popular assets in one folder</p>"
              descriptionColour="#000"
              buttonText="Brand"
              buttonBackgroundColor="#bfbaaf"
              buttonTextColor="#fff"
              buttonBorderColor=""
              buttonRadius=".3em"
              lineHeight="2"
              backgroundColor="#f3f3f3"
              backgroundImage="https://unsplash.it/800/600?image=22"
              cardItemWidth="40%"
              imagePaddingHeight="100%"
              boxShadow="0 20px 40px -14px rgba(0, 0, 0, 0.25)"
            />
          </BwkzQuickLinksRow>
        </BwkzQuickLinks>
      </BwkzSelectionDropdown>
    );
  }
}

export default LivePreview;
