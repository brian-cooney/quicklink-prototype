import React, { Component } from "react";
import { Flex, Box } from "rebass";
import { withFormik } from "formik";

import BwkzSelectionDropdown from "../../../BwkzSectionDropdown/BwkzSectionDropdown";

import BwkzInputGroupItem from "../../../BwkzInputGroupItem/BwkzInputGroupItem";

class ButtonOptions extends Component {
  state = {};
  render() {
    const { values, handleChange } = this.props;

    const rebassGrid = [1, 1 / 2, 1 / 3];
    return (
      <BwkzSelectionDropdown headerText="Button Options">
        <Flex flexWrap="wrap" mt={2}>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Button Position"
              placeholder="Middle"
              tooltipText="Button Position"
            />
          </Box>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Button Width"
              placeholder="90%"
              tooltipText="changes the button background colour"
            />
          </Box>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Button Height"
              placeholder="48px"
              tooltipText="changes the button background colour"
            />
          </Box>
        </Flex>
        <Flex flexWrap="wrap" mt={2} mb={2}>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              type="text"
              name="BackgroundColour"
              labelTitle="Button Background Colour"
              placeholder="placeholder"
              tooltipText="changes the button background colour"
              buttonBackgroundColor={values.buttonBackgroundColor}
            />
          </Box>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Button Background Colour (hover)"
              placeholder="placeholder"
              tooltipText="changes the button background colour"
            />
          </Box>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Button Text Colour"
              placeholder="#FFFFFF"
              tooltipText="changes the button background colour"
            />
          </Box>
        </Flex>
      </BwkzSelectionDropdown>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({ buttonBackgroundColor: "" })
})(ButtonOptions);
