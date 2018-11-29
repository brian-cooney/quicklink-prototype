import React from "react";
import PropTypes from "prop-types";

import { BwkzFormInput, BwkzLabel } from "./BwkzFormInput.styled";

const BwkzFormInputComponent = ({
  placeholder,
  position,
  labelTitle,

  ...styles
}) => <BwkzFormInput {...styles} placeholder={placeholder} />;

BwkzFormInputComponent.defaultProps = {
  borderRadius: ".25em",
  borderColor: "",
  backgroundColor: "#eee",
  placeholderColor: "",
  placeholder: ""
};

BwkzFormInputComponent.propTypes = {
  borderRadius: PropTypes.string,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  placeholderColor: PropTypes.string,
  lineHeight: PropTypes.string,

  placeholder: PropTypes.string
};

export default BwkzFormInputComponent;
