import React from "react";
import {
  Flex,
  Image,
  Text,
  Icon,
  useDisclosure,
  Circle,
  Wrap,
  Tag,
} from "@chakra-ui/react";
import { BsPlayCircleFill } from "react-icons/bs";

const SearchResultMainCard = ({ item }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex
      position="relative"
      bgColor="#181818"
      borderRadius="10px"
      direction="column"
      p="22px"
      justify="flex-start"
      align="flex-start"
      color="white"
      w="100%"
      h="220px"
      _hover={{
        cursor: "pointer",
        backgroundColor: "#282828",
      }}
      onMouseEnter={onToggle}
      onMouseLeave={onToggle}
      transition="background-color 0.5s ease"
    >
      <Image
        src={item?.album?.images[0]?.url}
        boxSize="90px"
        borderRadius="5px"
        shadow="dark-lg"
        mb="20px"
      />
      <Text fontSize="30px" fontWeight="bold" noOfLines={2} maxW="80%">
        {item.name}
      </Text>
      <Wrap>
        <Text fontSize="14px">
          {item?.artists.map((a) => a?.name).join(", ")}
        </Text>
        <Tag
          size="md"
          borderRadius="full"
          variant="solid"
          colorScheme="blackAlpha"
        >
          CANCIÓN
        </Tag>
      </Wrap>
      <Circle
        bg="black"
        boxSize="40px"
        position="absolute"
        right={7}
        bottom={7}
        zIndex={1}
        display={isOpen ? "block" : "none"}
        transition="all 2s ease"
        shadow="dark-lg"
      >
        <Icon
          as={BsPlayCircleFill}
          color="#1ED760"
          borderColor="#1ED760"
          boxSize="45px"
          rounded="full"
          _hover={{ transform: "scale(1.1)", transitionDuration: "0.3s" }}
        />
      </Circle>
    </Flex>
  );
};

export default SearchResultMainCard;

