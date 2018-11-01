import styled from 'styled-components/macro';

export const BwkzButton = styled.button`
  padding: 0 20px;
  border: 1px solid ${props => props.borderColor};
  border-radius: ${props => props.borderRadius};

  background: ${props => props.backgroundColor};
  color: ${props => props.color};

  line-height: ${props => props.lineHeight};
  cursor: pointer;

  &.position {
    &-left {
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &-right {
      border-left: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;
