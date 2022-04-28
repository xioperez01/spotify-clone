import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  ScaleFade,
  Icon,
  useDisclosure,
  Circle,
} from "@chakra-ui/react";
import { BsPlayCircleFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const CardType2 = ({ image, title, description, owner, id }) => {
  const history = useHistory();
  const { isOpen, onToggle } = useDisclosure();

  const handlePath = () => {
    history.push(`/playlist/${id}`);
  };

  return (
    <>
      <Box
        w="100%"
        h="auto"
        bg="#181818"
        borderRadius="lg"
        overflow="hidden"
        align="center"
        p="15px"
        _hover={{
          cursor: "pointer",
          background: "#282828",
          transitionDuration: "0.6s",
          transitionTimingFunction: "ease-in-out",
        }}
        onMouseEnter={onToggle}
        onMouseLeave={onToggle}
        onClick={handlePath}
      >
        <Box position="relative">
          <Image
            src={image}
            alt="AlbumImage"
            borderRadius="5px"
            boxSize="100%"
            align="center"
          />
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
            {description ? description : `De ${owner}`}
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default CardType2;

