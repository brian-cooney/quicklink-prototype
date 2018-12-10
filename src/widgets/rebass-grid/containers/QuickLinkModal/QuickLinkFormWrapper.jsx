import React, { Component } from "react";
import { withFormik } from "formik";

import LivePreview from "../LivePreview/LivePreview";
import GeneralOptions from "../GeneralOptions/GeneralOptions";
import ButtonOptions from "../ButtonOptions/ButtonOptions";
import RowOptions from "../RowOptions/RowOptions";

class QuickLinkFormWrapper extends Component {
  state = {};
  render() {
    return (
      <form onSubmit={handleSubmit}>
        <LivePreview />
        <GeneralOptions />
        <ButtonOptions />
        <RowOptions />
      </form>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({})
})(QuickLinkFormWrapper);
