import React, { Component } from "react";

import GridTest from "./widgets/rebass-grid/RebassGrid";
import { Formik } from "formik";

import "./App.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStroopwafel,
  faInfoCircle,
  faCoffee
} from "@fortawesome/free-solid-svg-icons";
import "./widgets/rebass-grid/style.css";
import EditForm from "./widgets/rebass-grid/AdminPanel";

library.add(faStroopwafel, faInfoCircle, faCoffee);

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <GridTest cardTitle="Brand Management" />
        {/* <RebassGridFull /> */}
        {/* <FlexBox /> */}
        {/* <Basic /> */}
        <div>---</div>
        <EditForm />
        {/* <MyForm /> */}
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
