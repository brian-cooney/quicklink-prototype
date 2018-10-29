import React from 'react';
import { Flex, Box } from 'rebass';

const QuickLinksWidget = () => {
  return (
    <Flex flexWrap="wrap">
      <Box bg="blue" width={[1, 1 / 2, 1 / 3, 1 / 4]}>
        BOX
      </Box>
      <Box bg="blue" width={[1, 1 / 2, 1 / 3, 1 / 4]}>
        BOX
      </Box>
      <Box bg="blue" width={[1, 1 / 2, 1 / 3, 1 / 4]}>
        BOX
      </Box>
    </Flex>
  );
};

export default QuickLinksWidget;
