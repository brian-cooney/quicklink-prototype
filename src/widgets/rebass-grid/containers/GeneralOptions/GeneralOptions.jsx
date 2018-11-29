import React, { Component } from "react";
import { Flex, Box } from "rebass";

import BwkzSelectionDropdown from "../../../BwkzSectionDropdown/BwkzSectionDropdown";

import BwkzInputGroupItem from "../../../BwkzInputGroupItem/BwkzInputGroupItem";

class GeneralOptions extends Component {
  state = {};
  render() {
    const rebassGrid = [1, 1 / 2, 1 / 3];

    return (
      <BwkzSelectionDropdown headerText="General Options">
        <Flex flexWrap="wrap" mt={2}>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Background Colour"
              placeholder="#234243"
              tooltipText="changes the button background colour"
            />
          </Box>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Background Image Alt Text"
              placeholder=""
              tooltipText="changes the button background colour"
            />
          </Box>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Background Image"
              placeholder="placeholder"
              tooltipText="changes the button background colour"
            />
          </Box>
        </Flex>
        <Flex flexWrap="wrap" mt={2} mb={2}>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Container Width"
              placeholder="placeholder"
              tooltipText="changes the button background colour"
            />
          </Box>
          <Box px={2} width={rebassGrid} />
          <Box px={2} width={rebassGrid} />
        </Flex>
      </BwkzSelectionDropdown>
    );
  }
}

export default GeneralOptions;
