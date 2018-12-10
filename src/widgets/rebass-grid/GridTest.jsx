import React from "react";
import { Flex, Box, Text, Card, Image, Button } from "rebass";

const GridTest = (props) => {
  const row = [1, 2];
  const col = [1, 2, 3, 4];

  return (
    <Flex flexWrap="flex" justifyContent="center">
      {col.map((item) => (
        <Box key={item} width={[1, 1 / 2, 1 / 4]}>
          <Card mx={2} boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)" bg="#f6f6ff">
            <Image
              src={`https://unsplash.it/500/500?image=4${Math.floor(
                Math.random() * 10 + 1
              )}`}
              borderRadius={2}
            />
            <Text p={2} pb={3} fontWeight="bold">
              {props.cardTitle}
            </Text>
            <Text p={2}>Request access to the Q4 results</Text>
            <Box p={2}>
              <Button bg="grey">Brand</Button>
            </Box>
          </Card>
        </Box>
      ))}
    </Flex>
  );
};

export default GridTest;
