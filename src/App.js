import React, { Component } from "react";

import BwkzQuickLinks from "./widgets/BwkzQuickLinks/BwkzQuickLinks";
import BwkzQuickLinkItem from "./widgets/BwkzQuickLinks/BwkzQuickLinkItem";
import BwkzContainer from "./components/BwkzContainer/BwkzContainer";
import RebassGrid from "./widgets/rebass-grid/RebassGrid";
import RebassGridFull from "./widgets/rebass-grid/RebassGridFull";
import { BwkzQuickLinksRow } from "./widgets/BwkzQuickLinks/BwkzQuickLinks.styled";
import "./App.scss";
import "./widgets/rebass-grid/style.css";
import FlexBox from "./widgets/rebass-grid/Flexbox";
import Basic from "./widgets/rebass-grid/AdminPanel";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <RebassGrid />
        {/* <RebassGridFull /> */}
        {/* <FlexBox /> */}
        <Basic />
      </div>
    );
  }
}

export default App;

/* <BwkzContainer
        horizontalPadding="3"
        backgroundColor="#eef1f5"
        backgroundImage="https://unsplash.it/1800/600?image=47"
      >
        <BwkzQuickLinks>
          {row.map((item) => (
            <BwkzQuickLinksRow>
              {col.map((item) => (
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
                  backgroundImage={`https://unsplash.it/800/600?image=4${item}`}
                  cardItemWidth="20%"
                  imagePaddingHeight="100%"
                />
              ))}
            </BwkzQuickLinksRow>
          ))}
        </BwkzQuickLinks>
      </BwkzContainer> */
