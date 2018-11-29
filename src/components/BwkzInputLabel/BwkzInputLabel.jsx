import React from "react";
import Tippy from "@tippy.js/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BwkzLabel, StyledSpan } from "./BwkzInputLabel.styled";

import "tippy.js/dist/tippy.css";

const BwkzInputLabel = (props) => {
  const { labelTitle, tooltipText } = props;
  return (
    <React.Fragment>
      <BwkzLabel>{labelTitle}</BwkzLabel>
      <Tippy content={tooltipText}>
        <div style={{ float: "right" }}>
          <FontAwesomeIcon icon="info-circle" />
        </div>
      </Tippy>
    </React.Fragment>
  );
};

export default BwkzInputLabel;
