import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const CardType4 = ({ item }) => {
  return (
    <Flex
      w="475px"
      h="222px"
      bg={item?.color}
      borderRadius="lg"
      overflow="hidden"
      align="flex-start"
      direction="column"
      justify="space-between"
      _hover={{cursor: "pointer"}}
    >
      <Text fontSize="40px" color="white" fontWeight="bold"  m="15px" maxW="90%" lineHeight="1.2">
        {item?.title}
      </Text>
      <Image
        src={item?.images?.url}
        alt="image"
        boxSize="120px"
        transform="rotate(25deg)"
        ml="375px"
        mb="-5px"
      ></Image>
    </Flex>
  );
};

export default CardType4;
