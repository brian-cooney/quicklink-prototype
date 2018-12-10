import React, { Component } from "react";
import { Flex, Box } from "rebass";
import { withFormik } from "formik";

import BwkzSelectionDropdown from "../../../BwkzSectionDropdown/BwkzSectionDropdown";

import BwkzInputGroupItem from "../../../BwkzInputGroupItem/BwkzInputGroupItem";
import { valueFromTraverse } from "docz-utils/lib/ast";

class GeneralOptions extends Component {
  render() {
    const rebassGrid = [1, 1 / 2, 1 / 3];

    const { values, handleChange, handleBlur } = this.props;

    console.log("values are", values);

    return (
      <BwkzSelectionDropdown headerText="General Options">
        <Flex flexWrap="wrap" mt={2}>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              type="text"
              name="BackgroundColour"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Background Image Alt Text"
              placeholder=""
              tooltipText={values.tooltipText}
            />
          </Box>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Background Image"
              placeholder="placeholder"
              tooltipText={values.tooltipText}
            />
          </Box>
        </Flex>
        <Flex flexWrap="wrap" mt={2} mb={2}>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Container Width"
              placeholder="placeholder"
              tooltipText={values.tooltipText}
            />
          </Box>
          <Box px={2} width={rebassGrid} />
          <Box px={2} width={rebassGrid} />
        </Flex>
      </BwkzSelectionDropdown>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({ tooltipText: "" })
})(GeneralOptions);
