import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const BigCard = () => {
  return (
    <Flex w="100%" h="100%" bgColor="red">
      <Text>hola</Text>
      <Text>title</Text>
      <Text>
        {"cantidad"}
        {"description"}
      </Text>
    </Flex>
  );
};

export default BigCard;

