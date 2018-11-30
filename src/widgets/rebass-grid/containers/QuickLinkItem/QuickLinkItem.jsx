import React, { Component } from "react";
import { Flex, Box, Text, Button } from "rebass";
import { Editor } from "@tinymce/tinymce-react";
import BwkzInputGroupItem from "../../../BwkzInputGroupItem/BwkzInputGroupItem";

import HorizontalLine from "./QuickLinkItem.styled";

class QuickLinkItem extends Component {
  state = {};
  render() {
    const rebassGrid = [1, 1 / 2, 1 / 3];
    const { quickLinkTitle } = this.props;

    return (
      <div>
        <HorizontalLine />
        <Flex px={2} py={2} alignItems="center" bt={1}>
          <Text>{quickLinkTitle}</Text>
          <Box mx="auto" />
          <Button color="grey" bg="white" border={1} borderColor="grey">
            Remove Quick Link
          </Button>
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
          <Box px={2} width={rebassGrid} />
        </Flex>

        <Flex mb={4}>
          <Box px={2} width={1}>
            <Editor
              initialValue="<p>This is the initial content of the editor</p>"
              init={{
                plugins: "link image code",
                toolbar:
                  "undo redo | bold italic | alignleft aligncenter alignright | code"
              }}
              onChange={this.handleEditorChange}
            />
          </Box>
        </Flex>
      </div>
    );
  }
}

export default QuickLinkItem;
