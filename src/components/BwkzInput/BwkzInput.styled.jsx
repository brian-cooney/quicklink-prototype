import styled from 'styled-components';

export const BwkzInput = styled.input`
  width: 100%;

  padding: 0 20px;
  ${props => props.borderColor
    ? `border: 1px solid ${props.borderColor };`
    : 'border: none;'
  };
  border-radius: ${props => props.borderRadius};

  background: ${props => props.backgroundColor};
  color: ${props => props.color};

  line-height: ${props => props.lineHeight};

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

  &:focus {
    background: #fff;
  }

  &::placeholder {
    color: ${props => props.placeholderColor};
  }
`;
