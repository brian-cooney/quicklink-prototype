import styled from 'styled-components';

import media from '../../lib/media';

export const BwkzSearchBar = styled.div`
  padding: ${props => props.innerPadding};
  border-top-left-radius: ${props => props.innerBorderTopLeftRadius};
  border-top-right-radius: ${props => props.innerBorderTopRightRadius};
  border-bottom-left-radius: ${props => props.innerBorderBottomLeftRadius};
  border-bottom-right-radius: ${props => props.innerBorderBottomRightRadius};

  background-color: ${props => props.innerBackgroundColor};
`;

export const BwkzSearchBarForm = styled.form`

`;

export const BwkzSearchBarText = styled.div`
  color: ${props => props.color};
  text-align: center;

  & > * {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const BwkzSearchBarInput = styled.div`
  display: flex;
  align-items: center;

  margin: 30px auto;

  ${media.tablet`
    max-width: 75%;
  `}

  ${media.desktop`
    max-width: 60%;
  `}
`;
