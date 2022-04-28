import React from "react";
import {
  Box,
  Flex,
  Text,
  ScaleFade,
  Icon,
  useDisclosure,
  Circle,
  Avatar,
} from "@chakra-ui/react";
import { BsPlayCircleFill } from "react-icons/bs";

const ArtistCard = ({ image, title, type }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box
        w="auto"
        h="100%"
        maxW="220px"
        bg="#181818"
        borderRadius="lg"
        overflow="hidden"
        align="center"
        p="15px"
        _hover={{
          cursor: "pointer",
          backgroundColor: "#282828",
        }}
        onMouseEnter={onToggle}
        onMouseLeave={onToggle}
        transition="background-color 0.5s ease"
      >
        <Box position="relative">
          <Avatar src={image} boxSize="150" />
          <ScaleFade initialScale={0.9} in={isOpen}>
            <Circle
              bg="black"
              boxSize="40px"
              position="absolute"
              right={2}
              bottom={2}
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

        <Flex direction="column" align="flex-start" mt="5" w="100%">
          <Text
            fontSize="md"
            fontWeight="bold"
            color="white"
            isTruncated
            maxW="100%"
          >
            {title}
          </Text>
          <Text
            fontSize="sm"
            fontWeight="semi-bold"
            color="#D2CDCC"
            opacity="0.7"
            pt="3px"
            isTruncated
            maxW="100%"
          >
            {type}
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default ArtistCard;

