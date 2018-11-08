import styled from 'styled-components';

export const BwkzArrow = styled.button`
  border: 0;

  background: none;
  color: ${props => props.color};

  font-size: ${props => props.size};

  cursor: pointer;
  outline: none;
  opacity: 0.5;

  z-index: 999;

  &:hover {
    opacity: 1;
  }
`;
