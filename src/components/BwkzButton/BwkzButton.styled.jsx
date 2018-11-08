import styled from 'styled-components';

export const BwkzButton = styled.button`
  position: relative;

  padding: 0 20px;
  ${props => props.borderColor
    ? `border: 1px solid ${props.borderColor };`
    : 'border: none;'
  };
  border-radius: ${props => props.borderRadius};

  background: ${props => props.backgroundColor};
  color: ${props => props.color};

  line-height: ${props => props.lineHeight};
  cursor: pointer;

  &::before {
    ${props => props.withSeparator && 'content: "";'};
    content: ;

    position: absolute;
    top: 15%;
    bottom: 15%;

    width: 1px;

    background-color: ${props => props.color};

    opacity: 0.5;
  }

  &.position {
    &-left {
      margin-right: -1px;
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;

      &::before {
        right: 0;
      }
    }

    &-right {
      margin-left: -1px;
      border-left: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;

      &::before {
        left: 0;
      }
    }
  }

  &:hover {
    opacity: 0.85;
  }
`;

export const BwkzLink = styled.a`
  padding: 0 20px;
  ${props => props.borderColor
    ? `border: 1px solid ${props.borderColor };`
    : 'border: none;'
  };
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

  &:hover {
    opacity: 0.85;
  }

  display: inline-block;
  text-decoration: none;
`;
