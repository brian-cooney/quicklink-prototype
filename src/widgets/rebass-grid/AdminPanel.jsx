import React, { Component } from "react";
import {
  Container,
  Modal,
  ModalDialog,
  ModalHeader,
  ModalTitle,
  Button,
  ModalFooter,
  ModalContent,
  ModalBody
} from "styled-bootstrap-components";
import { Editor } from "@tinymce/tinymce-react";

import { Flex, Box, Text, link, Card, Image } from "rebass";

import { Input, StyledModalDialog } from "./AdminPanel.styled";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      initialValue: "<p>This is the initial content of the editor</p>"
    };
  }

  handleEditorChange = (e) => {
    console.log("Content was updated:", e.target.getContent());
  };

  handleModal() {
    this.setState({
      hidden: !this.state.hidden
    });
  }

  render() {
    const { hidden, initialValue } = this.state;
    return (
      <Container my={4}>
        <Modal hidden={hidden}>
          <StyledModalDialog>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>Edit Quicklinks</ModalTitle>
                <Button outline onClick={() => this.handleModal()}>
                  <span aria-hidden="true">&times;</span>
                </Button>
              </ModalHeader>
              <ModalBody>
                <Editor
                  initialValue={initialValue}
                  init={{
                    plugins: "link image code",
                    toolbar:
                      "undo redo | bold italic | alignleft aligncenter alignright | code"
                  }}
                  onChange={this.handleEditorChange}
                />
                <Flex>
                  <Box width={[1, 1 / 2]}>
                    <Input />
                  </Box>
                  <Box width={[1, 1 / 2]}>
                    <Input />
                  </Box>
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => this.handleModal()}>Close Edit</Button>
              </ModalFooter>
            </ModalContent>
          </StyledModalDialog>
        </Modal>
        <Button bg="blue" color="white" onClick={() => this.handleModal()}>
          Quick Link Edit
        </Button>
      </Container>
    );
  }
}

export default EditForm;
