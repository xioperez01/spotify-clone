import React from "react";
import {
  Box,
  Flex,
  Text,
  ScaleFade,
  Icon,
  useDisclosure,
  Circle,
} from "@chakra-ui/react";
import { BsPlayCircleFill } from "react-icons/bs";

const BigCard = ({ description, title, total, color }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box w="100%" h="100%" position="relative">
      <Flex
        w="100%"
        minH="100%"
        background={color}
        borderRadius="10px"
        direction="column"
        align="flex-start"
        justify="flex-end"
        p="20px 10px"
        _hover={{
          cursor: "pointer",
          transitionDuration: "0.6s",
          transitionTimingFunction: "ease-in-out",
        }}
        color="white"
        onMouseEnter={onToggle}
        onMouseLeave={onToggle}
      >
        {description ? (
          <Text
            fontSize="md"
            ml="10px"
            mb="30px"
            fontWeight="semibold"
            maxH="120px"
            overflow="hidden"
          >
            {description}
          </Text>
        ) : (
          <></>
        )}
        <Text fontSize="3xl" fontWeight="bold" ml="10px">
          {title}
        </Text>
        <Text fontSize="md" ml="10px" fontWeight="semibold">
          {`${total} ${title.toLowerCase()}`}
        </Text>
      </Flex>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Circle
          bg="black"
          boxSize="40px"
          position="absolute"
          right={6}
          bottom={6}
        >
          <Icon
            as={BsPlayCircleFill}
            color="#1ED760"
            borderColor="#1ED760"
            boxSize="45px"
            shadow="dark-lg"
            rounded="full"
            _hover={{ transform: "scale(1.1)", transitionDuration: "0.3s" }}
          />
        </Circle>
      </ScaleFade>
    </Box>
  );
};

export default BigCard;

