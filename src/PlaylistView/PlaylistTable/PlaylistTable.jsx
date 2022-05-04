import { Container, HStack, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { MdOutlinePauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import MemberTable from "./MemberTable";
import { useDataLayerValue } from "../../DataLayer";
import {
  pauseTrack,
  playPlaylist,
} from "../../Shared/Functions/SpotifyFunctions";

const PlaylistTable = ({ id, isOwn, items }) => {
  const [{ isPlaying, currentPlayingPlaylist }, dispatch] = useDataLayerValue();
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <Container maxW="100%" px={{ base: 4, lg: 8 }} w="100%">
      <HStack align="center" spacing={4} py={4}>
        {isPlaying ? (
          <Icon
            as={MdOutlinePauseCircleFilled}
            onClick={() => {
              pauseTrack(dispatch);
            }}
            color="#1DB954"
            borderColor="#1DB954"
            boxSize="65px"
            _hover={{
              transform: "scale(1.1)",
              transitionDuration: "0.3s",
            }}
          />
        ) : (
          <Icon
            as={MdPlayCircleFilled}
            color="#1DB954"
            boxSize="65px"
            _hover={{
              transform: "scale(1.1)",
              transitionDuration: "0.3s",
            }}
            onClick={() => {
              playPlaylist(id, dispatch);
            }}
          />
        )}
        {!isOwn || id !== "meSavedTracks" ? (
          like ? (
            <Icon
              as={HiHeart}
              boxSize="35px"
              color="#1DB954"
              onClick={handleLike}
            />
          ) : (
            <Icon
              as={HiOutlineHeart}
              boxSize="35px"
              color="#D2CDCC"
              ml="-5px"
              onClick={handleLike}
              _hover={{ color: "#fff" }}
            />
          )
        ) : (
          <></>
        )}
        <Icon
          as={BsThreeDots}
          boxSize="35px"
          color="#D2CDCC"
          _hover={{ color: "#fff" }}
          m="0 10px"
        />
      </HStack>

      <MemberTable items={items} />
    </Container>
  );
};

export default PlaylistTable;

