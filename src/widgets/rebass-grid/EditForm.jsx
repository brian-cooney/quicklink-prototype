import React, { Component } from "react";
import { Button } from "styled-bootstrap-components";

import QuickLinkModal from "./containers/QuickLinkModal/QuickLinkModal";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  handleModal = () => {
    this.setState({
      hidden: !this.state.hidden
    });
  };

  render() {
    const { hidden } = this.state;
    return (
      <div>
        <QuickLinkModal hidden={hidden} closeModal={this.handleModal} />
        <Button bg="blue" color="white" onClick={() => this.handleModal()}>
          Quick Link Edit
        </Button>

        <h1>Hello World</h1>
      </div>
    );
  }
}

export default EditForm;
