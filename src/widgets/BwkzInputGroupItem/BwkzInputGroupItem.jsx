import React from "react";
import styled from "styled-components";

import BwkzInputLabel from "../../components/BwkzInputLabel/BwkzInputLabel";
import BwkzFormInputComponent from "../../components/BwkzFormInput/BwkzFormInput";

export const BwkzFormInputWrapper = styled.div`
  margin-left: 0px;
  margin-right: 0px;
`;

const BwkzInputGroupItem = (props) => {
  const { labelTitle, placeholder, tooltipText } = props;
  return (
    <BwkzFormInputWrapper>
      <BwkzInputLabel
        labelTitle={labelTitle}
        placeholder={placeholder}
        tooltipText={tooltipText}
      />
      <BwkzFormInputComponent placeholder={placeholder} />
    </BwkzFormInputWrapper>
  );
};

export default BwkzInputGroupItem;
