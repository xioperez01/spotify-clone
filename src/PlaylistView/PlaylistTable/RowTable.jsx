import React, { useState } from "react";
import { Box, HStack, Icon, Image, Td, Text, Tr, Link } from "@chakra-ui/react";
import { BsThreeDots, BsFillPlayFill } from "react-icons/bs";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { milliSecondsToMinutes } from "../../Shared/Functions/secondsToMinutes";
import { useDataLayerValue } from "../../DataLayer";
import { playTrack } from "../../Shared/Functions/SpotifyFunctions";
import { useLocation } from "react-router-dom";

const Row = ({ member, isCurrentLike = false, index }) => {
  const { pathname } = useLocation();
  const isOwn = pathname.split("/")[2] === "meSavedTracks";
  const [{ isPlaying, currentPlayingTrack }, dispatch] = useDataLayerValue();
  const [isLike, setIsLike] = useState(isCurrentLike);
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
      bgColor={
        isPlaying && currentPlayingTrack?.item?.id === member?.track?.id
          ? "rgba(255,255,255, 0.2)"
          : "transparent"
      }
      _focus={{ backgroundColor: "#665e5b" }}
      onMouseEnter={handleInHoverSong}
      onMouseLeave={handleOutHoverSong}
      transition="background-color 0.5s ease"
      onDoubleClick={() => playTrack(member?.track?.id, dispatch)}
    >
      <Td border="none" w="20px" px={0} textAlign="center" pl={2}>
        {isHoverSong ? (
          <Icon
            boxSize="20px"
            position="relative"
            right="10px"
            as={BsFillPlayFill}
          ></Icon>
        ) : (
          <Text
            position="relative"
            mr="10px"
            _hover={{ cursor: "context-menu" }}
          >
            {index}
          </Text>
        )}
      </Td>

      <Td border="none">
        <HStack spacing="3">
          <Image
            name={member?.track?.name}
            src={member?.track?.album?.images[0]?.url}
            boxSize="10"
          />
          <Box>
            <Text
              fontWeight="medium"
              fontSize="16px"
              color="white"
              isTruncated
              maxW="15vw"
              _hover={{ cursor: "context-menu" }}
            >
              {member?.track?.name}
            </Text>
            <Text as={Link} p="0" isTruncated maxW="15vw">
              {member?.track?.artists[0]?.name}
            </Text>
          </Box>
        </HStack>
      </Td>

      <Td border="none">
        <Text as={Link} color="muted" isTruncated maxW="15vw">
          {member?.track?.album?.name}
        </Text>
      </Td>
      <Td border="none">
        <Text color="muted" isTruncated>
          {new Date("2000") > new Date(member?.added_at)
            ? ""
            : new Date(member?.added_at).toUTCString().slice(5, 16)}
        </Text>
      </Td>
      <Td border="none" px={0} textAlign="center">
        {isLike || isOwn ? (
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
      <Td border="none" px={0} textAlign="center">
        <Text color="muted" _hover={{ cursor: "context-menu" }} isTruncated>
          {milliSecondsToMinutes(member?.track?.duration_ms)}
        </Text>
      </Td>
      <Td border="none" px={0} textAlign="center">
        {isHoverSong ? (
          <Icon as={BsThreeDots} boxSize="20px" color="#D2CDCC" />
        ) : (
          <></>
        )}
      </Td>
    </Tr>
  );
};

export default Row;

