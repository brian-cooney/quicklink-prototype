import React from "react";
import styled from "styled-components";
import { Flex, Box } from "rebass";

const Line = styled.div`
  border-top: 2px solid grey;
`;

const HorizontalLine = () => {
  return (
    <Flex>
      <Box width={1} px={2}>
        <Line />
      </Box>
    </Flex>
  );
};

export default HorizontalLine;
