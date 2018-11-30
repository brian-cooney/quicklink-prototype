import React, { Component } from "react";
import { Flex, Box, Text, Button } from "rebass";
import { Editor } from "@tinymce/tinymce-react";

import BwkzSelectionDropdown from "../../../BwkzSectionDropdown/BwkzSectionDropdown";

import BwkzInputGroupItem from "../../../BwkzInputGroupItem/BwkzInputGroupItem";
import QuickLinkItem from "../QuickLinkItem/QuickLinkItem";

class RowOptions extends Component {
  handleEditorChange = (e) => {
    console.log("Content was updated:", e.target.getContent());
  };

  render() {
    const rebassGrid = [1, 1 / 2, 1 / 3];
    return (
      <BwkzSelectionDropdown headerText="Row Options">
        <Flex flexWrap="wrap" mt={2}>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Row Height"
              placeholder="placeholder"
              tooltipText="changes the button background colour"
            />
          </Box>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Quick Links Width"
              placeholder="placeholder"
              tooltipText="changes the button background colour"
            />
          </Box>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Quick Links Height"
              placeholder="placeholder"
              tooltipText="changes the button background colour"
            />
          </Box>
        </Flex>
        <Flex flexWrap="wrap" mt={4}>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Quick Links Border Radius"
              placeholder="6px"
              tooltipText="changes the button background colour"
            />
          </Box>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Quick Links Border Radius Colour"
              placeholder="placeholder"
              tooltipText="changes the button background colour"
            />
          </Box>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Margin (top)"
              placeholder="10px"
              tooltipText="changes the button background colour"
            />
          </Box>
        </Flex>
        <Flex mt={4}>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Margin (right)"
              placeholder="10px"
              tooltipText="changes the button background colour"
            />
          </Box>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Margin (left)"
              placeholder="10px"
              tooltipText="changes the button background colour"
            />
          </Box>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Margin (bottom)"
              placeholder="placeholder"
              tooltipText="changes the button background colour"
            />
          </Box>
        </Flex>
        <Flex flexWrap="wrap" mt={4} mb={4}>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Show Drop Shadow"
              placeholder="placeholder"
              tooltipText="changes the button background colour"
            />
          </Box>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Drop Shawdow Colour"
              placeholder="placeholder"
              tooltipText="changes the button background colour"
            />
          </Box>
          <Box px={2} width={rebassGrid}>
            <BwkzInputGroupItem
              labelTitle="Image Height"
              placeholder="150px"
              tooltipText="changes the button background colour"
            />
          </Box>
        </Flex>
        <QuickLinkItem quickLinkTitle="Quick Links 1" />
        <QuickLinkItem quickLinkTitle="Quick Links 2" />
        <QuickLinkItem quickLinkTitle="Quick Links 3" />
        <Button bg="white" color="grey" border={1} ml={2} mb={2}>
          Add Quick Link
        </Button>
      </BwkzSelectionDropdown>
    );
  }
}

export default RowOptions;
