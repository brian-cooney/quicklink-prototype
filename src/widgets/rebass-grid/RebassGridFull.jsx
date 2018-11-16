import React from "react";
import { Flex, Box, Text, link, Card, Image, Button, Heading } from "rebass";

const GridTest = () => {
  const row = [1, 2];
  const col = [1, 2, 3, 4];

  return (
    <Flex flexWrap="flex" justifyContent="center" mt={3}>
      {col.map((item) => (
        <Box key={item} width={[1, 1 / 2, 1 / 4]}>
          <Card
            mx={2}
            p={4}
            py={6}
            backgroundImage="url(https://unsplash.it/1000/800?image=42)"
            backgroundSize="cover"
            borderRadius={1}
            color="white"
            bg="darkgray"
          >
            <Text p={2} pb={3} fontWeight="bold">
              Library
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
