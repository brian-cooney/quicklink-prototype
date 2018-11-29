import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalTitle,
  Button,
  ModalFooter,
  ModalContent,
  ModalBody
} from "styled-bootstrap-components";

import { StyledModalDialog } from "./QuickLinkModal.styled";
import GeneralOptions from "../GeneralOptions/GeneralOptions";
import QuickLinkItem from "../QuickLinkItem/QuickLinkItem";
import ButtonOptions from "../ButtonOptions/ButtonOptions";
import RowOptions from "../RowOptions/RowOptions";
import LivePreview from "../LivePreview/LivePreview";

class QuickLinkModal extends Component {
  render() {
    const { hidden, closeModal } = this.props;
    return (
      <Modal hidden={hidden}>
        <StyledModalDialog>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Edit Quicklinks</ModalTitle>
              <Button outline onClick={closeModal}>
                <span aria-hidden="true">&times;</span>
              </Button>
            </ModalHeader>
            <ModalBody>
              <LivePreview />
              <GeneralOptions />
              <ButtonOptions />
              <RowOptions />
              <QuickLinkItem />
            </ModalBody>
            <ModalFooter>
              <Button onClick={closeModal}>Close Edit</Button>
            </ModalFooter>
          </ModalContent>
        </StyledModalDialog>
      </Modal>
    );
  }
}

export default QuickLinkModal;
