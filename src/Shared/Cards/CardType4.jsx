import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { bgColorGenerate } from "../Functions/colorGenerator";

const CardType4 = ({ title, image, color, onOpen }) => {
  return (
    <Flex
      w="390px"
      h="222px"
      bg={color ? color : bgColorGenerate()}
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
        fontSize="40px"
        color="white"
        fontWeight="bold"
        m="15px"
        maxW="90%"
        lineHeight="1.2"
        zIndex={1}
      >
        {title}
      </Text>
      <Box transform="rotate(25deg)" position="absolute" bottom={-2} right={-5}>
        <Image src={image} alt="image" boxSize="130px" />
      </Box>
    </Flex>
  );
};

export default CardType4;

