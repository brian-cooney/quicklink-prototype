import React, { Component } from "react";
import styled from "styled-components";
import { withFormik } from "formik";
import PropTypes from "prop-types";

import Tippy from "@tippy.js/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "tippy.js/dist/tippy.css";

// import BwkzInputLabel from "../../components/BwkzInputLabel/BwkzInputLabel";
// import BwkzFormInputComponent from "../../components/BwkzFormInput/BwkzFormInput";

const BwkzFormInputWrapper = styled.div`
  margin-left: 0px;
  margin-right: 0px;
`;

const BwkzFormInput = styled.input`
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  color: rgb(73, 80, 87);
  background-color: rgb(255, 255, 255);
  background-clip: padding-box;
  box-sizing: border-box;
  padding: 0.375rem 0.75rem;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(206, 212, 218);
  border-image: initial;
  border-radius: 0.25rem;
`;

const BwkzLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

class BwkzInputGroupItem extends Component {
  render() {
    const {
      labelTitle,
      placeholder,
      name,
      type,
      handleChange,
      handleBlur,
      tooltipText
    } = this.props;
    return (
      <BwkzFormInputWrapper>
        <BwkzLabel>{labelTitle}</BwkzLabel>
        <Tippy content={tooltipText}>
          <div style={{ float: "right" }}>
            <FontAwesomeIcon icon="info-circle" />
          </div>
        </Tippy>
        <BwkzFormInputComponent
          placeholder={placeholder}
          onChange={handleChange}
          type={type}
          name={name}
          onBlur={handleBlur}
        />
      </BwkzFormInputWrapper>
    );
  }
}

const BwkzFormInputComponent = ({
  placeholder,
  position,
  labelTitle,
  handleChange,
  handleBlur,

  ...styles
}) => (
  <BwkzFormInput
    {...styles}
    placeholder={placeholder}
    type="text"
    name="BackgroundColour"
    onChange={handleChange}
    onBlur={handleBlur}
  />
);

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

export default withFormik({
  mapPropsToValues: () => ({ placeholder: "" })
})(BwkzInputGroupItem);
