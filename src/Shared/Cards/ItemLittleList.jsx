import React, { useState } from "react";
import { Box, HStack, Icon, Image, Td, Text, Tr, Link } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { milliSecondsToMinutes } from "../../Shared/Functions/secondsToMinutes";

const ItemLittleList = ({ item }) => {
  const [isLike, setIsLike] = useState(false);
  const [isHoverSong, setIsHoverSong] = useState(false);

  const handleInHoverSong = () => {
    setIsHoverSong(true);
  };

  const handleOutHoverSong = () => {
    setIsHoverSong(false);
  };

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <Tr
      _hover={{
        backgroundColor: "rgba(255,255,255, 0.2)",
        color: "white",
      }}
      _focus={{ backgroundColor: "#665e5b" }}
      onMouseEnter={handleInHoverSong}
      onMouseLeave={handleOutHoverSong}
      transition="all 0.3s ease"
    >
      <Td border="none" p={2}>
        <HStack spacing="3">
          <Image src={item?.album?.images[0]?.url} boxSize="10" />
          <Box>
            <Text
              fontWeight="medium"
              fontSize="16px"
              color="white"
              isTruncated
              maxW="15vw"
              _hover={{ cursor: "context-menu" }}
            >
              {item?.name}
            </Text>
            <Text
              as={Link}
              p="0"
              color="#a6a6a6"
              isTruncated
              maxW="15vw"
              fontSize="14px"
            >
              {item?.artists.map((a) => a?.name).join(", ")}
            </Text>
          </Box>
        </HStack>
      </Td>

      <Td border="none" px={0} textAlign="center" w="50px" color="#a6a6a6">
        {isLike ? (
          <Icon
            as={HiHeart}
            onClick={handleLike}
            boxSize="20px"
            color="#1DB954"
          />
        ) : isHoverSong ? (
          <Icon
            as={HiOutlineHeart}
            onClick={handleLike}
            boxSize="20px"
            color="#D2CDCC"
            _hover={{ color: "#fff" }}
          />
        ) : (
          <></>
        )}
      </Td>
      <Td border="none" px={0} textAlign="center" w="50px" color="#a6a6a6">
        <Text _hover={{ cursor: "context-menu" }} fontSize="14px" isTruncated>
          {milliSecondsToMinutes(item?.duration_ms)}
        </Text>
      </Td>
      <Td border="none" px={0} textAlign="center" w="50px" color="#a6a6a6">
        {isHoverSong ? (
          <Icon as={BsThreeDots} boxSize="20px" color="#D2CDCC" />
        ) : (
          <></>
        )}
      </Td>
    </Tr>
  );
};

export default ItemLittleList;

