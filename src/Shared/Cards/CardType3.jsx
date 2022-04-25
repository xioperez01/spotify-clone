import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const CardType3 = ({ item }) => {
  return (
    <Flex
      maxW="200px"
      h="200px"
      bg={item?.color}
      borderRadius="lg"
      overflow="hidden"
      align="center"
      direction="column"
      justify="space-between"
    >
      <Text bg="red">{item?.title}</Text>
      <Box bg="blue" boxSize="80px" transform={{rotate: "20deg"}}>rotado</Box>
      <Image src={item?.images?.url} alt="image" boxSize="80px" transform="rotate: 20deg"></Image>
    </Flex>
  );
};

export default CardType3;
