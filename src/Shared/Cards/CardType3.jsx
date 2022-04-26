import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const CardType3 = ({ item }) => {
  return (
    <Flex
      w="225px"
      h="220px"
      bg={item?.color}
      borderRadius="lg"
      overflow="hidden"
      align="flex-start"
      direction="column"
      justify="space-between"
      _hover={{cursor: "pointer"}}
      position="relative"
    >
      <Text fontSize="2xl" color="white" fontWeight="bold"  m="15px" maxW="90%" lineHeight="1.2">
        {item?.title}
      </Text>
      <Image
        src={item?.images?.url}
        alt="image"
        boxSize="100px"
        transform="rotate(25deg)"
        position="absolute"
        top="125px"
        left="140px"
      ></Image>
    </Flex>
  );
};

export default CardType3;
