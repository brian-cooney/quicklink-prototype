import styled from 'styled-components';

import media from '../../lib/media';

export const BwkzContainer = styled.section`
  padding: 15px;

  background-color: ${props => props.backgroundColor};
  background-image: ${props => props.backgroundImage && `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;

  min-height: ${props => props.height};

  ${media.desktop`
    padding: ${props => `${props.verticalPadding}px ${props.horizontalPadding}`};
  `}
`;
