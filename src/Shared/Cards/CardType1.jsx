import React from "react";
import {
  Flex,
  Icon,
  Image,
  ScaleFade,
  Text,
  Square,
  useDisclosure,
} from "@chakra-ui/react";
import { BsPlayCircleFill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const CardType1 = ({ item, onChangeColor, id }) => {
  const history = useHistory();
  const { isOpen, onToggle } = useDisclosure();

  const handlePath = () => {
    history.push(`/playlist/${id}`);
  };

  return (
    <Flex
      direction="row"
      alignItems="center"
      h="auto"
      minH="60px"
      w="100%"
      minW="200px"
      bgColor="rgba(48,48,48, 0.8)"
      rounded="md"
      color="white"
      _hover={{
        cursor: "pointer",
        backgroundColor: "rgba(255,255,255, 0.2)",
      }}
      transition="background-color 0.5s ease"
      onMouseEnter={() => {
        onToggle();
        item ? onChangeColor() : onChangeColor("51,12,170");
      }}
      onMouseLeave={onToggle}
      onClick={handlePath}
    >
      {item ? (
        <Image
          src={item?.images[0]?.url}
          boxSize={{ base: "60px", lg: "80px" }}
          roundedLeft="md"
        />
      ) : (
        <Square
          size={{ base: "60px", lg: "80px" }}
          bg="linear-gradient(135deg, rgba(65,1,244,1) -50%, rgba(99,63,236,1) 35%, rgba(187,227,216,1) 100%)"
          roundedLeft="md"
        >
          <Icon
            as={BsFillSuitHeartFill}
            boxSize={{ base: 5, lg: 7 }}
            color="on-accent-subtle"
          />
        </Square>
      )}
      <Flex
        direction="row"
        alignItems="center"
        w="100%"
        justifyContent="space-between"
        px={{ base: 2, lg: 4 }}
      >
        <Text fontWeight="bold" maxW="calc(100% - 45px)" noOfLines={2}>
          {item ? item?.name : "Canciones que te gustan"}
        </Text>
        <ScaleFade initialScale={0.9} in={isOpen}>
          <Icon
            as={BsPlayCircleFill}
            color="#1ED760"
            boxSize={{ base: "0", md: "45px" }}
            shadow="dark-lg"
            rounded="full"
            _hover={{ boxSize: "48px" }}
          />
        </ScaleFade>
      </Flex>
    </Flex>
  );
};

export default CardType1;

