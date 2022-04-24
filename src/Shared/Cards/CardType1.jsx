import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const CardType1 = ({ item }) => {
  console.log(item);
  return (
    <Flex direction="row" alignItems="center" h="auto" w="100%" bgColor="rgba(48,48,48, 0.8)" rounded="md" color="white">
      <Image src={item.images[1].url} boxSize="80px" roundedLeft="md" />
      <Text ml={4} fontWeight="bold">{item.name}</Text>
    </Flex>
  );
};

export default CardType1;

