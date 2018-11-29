import styled from "styled-components";
import { ModalDialog } from "styled-modal-component";

export const StyledModalDialog = styled(ModalDialog)`
  @media (min-width: 576px) {
    max-width: 500px;
    margin: 1.75rem auto;
  }
  @media (min-width: 768px) {
    max-width: 700px;
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
