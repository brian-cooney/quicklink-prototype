import styled from "styled-components";

export const BwkzSectionWrapper = styled.div`
  margin-bottom: 10px;
`;

export const BwkzSectionHeader = styled.div`
  background: #eaeaea;
  color: #4d4d4d;
  text-align: left;
  font-size: 1em;
  padding: 5px;
`;

export const BwkzSectionContent = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  border: 1px solid #eaeaea;
`;

export const BwkzSectionCaret = styled.b`
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  margin-right: 10px;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
`;
