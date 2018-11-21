import styled from "styled-components/macro";
import { ModalDialog } from "styled-modal-component";

export const Input = styled.input`
  width: 100%;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px #ddd;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const Button = styled.button`
  margin: 0px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: inherit;
  color: white;
  background-color: grey;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-weight: bold;
  border: 0;
  border-radius: 4px;
`;

export const StyledModalDialog = styled(ModalDialog)`
  @media (min-width: 576px) {
    max-width: 500px;
    margin: 1.75rem auto;
  }
  @media (min-width: 768px) {
    max-width: 500px;
    margin: 1.75rem auto;
  }
  @media (min-width: 992px) {
    max-width: 800px;
    margin: 1.75rem auto;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
    margin: 1.75rem auto;
  }
`;
