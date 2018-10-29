import React from 'react';
import { Flex, Box, Text, Image, Card } from 'rebass';
import styled from 'styled-components';

const StyledCardImage = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  background-image: url('https://unsplash.it/800/600?image=82');
`;

const StyledCardContent = styled.div`
  background-image: url('https://unsplash.it/800/600?image=82');
`;

const StyledCardTitle = styled.div`
  color: grey;
  text-transform: uppercase;
`;

const StyledCardText = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
`;

const StyledCardButton = styled.button`
  background-color: white;
  border: 1px solid grey;
  /* border-radius: 1rem; */
  color: grey;
  padding: 0.5rem;
  text-transform: lowercase;
  width: 30%;
`;

const QuickLinksWidget = props => {
  return (
    <Flex flexWrap="wrap">
      <Box width={[1, 1 / 2, 1 / 3, 1 / 3]} px={0}>
        <StyledCardContent>
          <StyledCardImage>
            <StyledCardTitle>Title</StyledCardTitle>

            <StyledCardText>
              This is the shorthand for flex-grow, flex-shrink and flex-basis
              combined. The second and third parameters (flex-shrink and
              flex-basis) are optional. Default is 0 1 auto.
            </StyledCardText>
            <StyledCardButton>Button</StyledCardButton>
          </StyledCardImage>
        </StyledCardContent>
      </Box>
    </Flex>
  );
};

export default QuickLinksWidget;
