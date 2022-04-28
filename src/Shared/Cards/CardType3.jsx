import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

const CardType3 = ({ title, image, onOpen }) => {
  const color = `rgba(${[
    Math.round(Math.random() * 160),
    Math.round(Math.random() * 160),
    Math.round(Math.random() * 160),
  ].join(",")},1)`;
  return (
    <Flex
      h="100%"
      w="100%"
      minW={{ base: "150px", xl: "180px" }}
      minH={{ base: "150px", xl: "180px" }}
      bg={color}
      borderRadius="lg"
      overflow="hidden"
      align="flex-start"
      direction="column"
      justify="space-between"
      _hover={{ cursor: "pointer" }}
      position="relative"
      onClick={onOpen}
    >
      <Text
        fontSize="2xl"
        color="white"
        fontWeight="bold"
        m="15px"
        maxW="90%"
        lineHeight="1.2"
        zIndex={1}
      >
        {title}
      </Text>
      <Image
        src={image}
        alt="image"
        boxSize="100px"
        transform="rotate(25deg)"
        position="absolute"
        bottom={-2}
        right={-5}
      ></Image>
    </Flex>
  );
};

export default CardType3;

