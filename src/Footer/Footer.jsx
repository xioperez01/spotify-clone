import React, { useState } from "react";
import { Flex, HStack, Icon, Image, Link, Box } from "@chakra-ui/react";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { IoMdMicrophone } from "react-icons/io";
import { BsList, BsArrowsAngleExpand } from "react-icons/bs";
import { MdDevices } from "react-icons/md";
import { BiVolumeLow } from "react-icons/bi";
import {
  BsPlayCircleFill,
  BsPauseCircleFill,
  BsFillSkipStartFill,
  BsFillSkipEndFill,
  BsArrowRepeat,
} from "react-icons/bs";
import { TiArrowShuffle } from "react-icons/ti";

import "./Styles/Footer.css";
import { useDataLayerValue } from "../DataLayer";
import {
  nexTrack,
  pauseTrack,
  playTrack,
  prevTrack,
} from "../Shared/Functions/SpotifyFunctions";

const Footer = () => {
  const [{ isPlaying, currentPlayingTrack }, dispatch] = useDataLayerValue();

  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(!like);
  };

  return (
    <>
      {currentPlayingTrack ? (
        <HStack
          spacing="auto"
          bg="#282828"
          height="90px"
          w="100%"
          position="absolute"
          bottom="0"
          templateColumns="repeat(3, 1fr)"
          color="white"
          p="16px"
          zIndex="100"
        >
          <Flex maxWidth="27vw" overflow="hidden">
            <Image
              boxSize="56px"
              objectFit="cover"
              src={currentPlayingTrack?.item?.album?.images[0]?.url}
              alt="Dan Abramov"
            />
            <Flex direction="column" pl="16px" justify="center">
              <Link
                fontWeight="semibold"
                fontSize="sm"
                overflow="hidden"
                isTruncated
                maxW="15vw"
              >
                {currentPlayingTrack?.item?.name}
              </Link>
              <Link fontSize="xs" color="#D2CDCC" isTruncated maxW="">
                {currentPlayingTrack?.item?.artists
                  .map((a) => a?.name)
                  .join(", ")}
              </Link>
            </Flex>
            <HStack onClick={handleClick} h="20px" margin="auto 16px">
              {like ? (
                <Icon
                  as={HiHeart}
                  justify="center"
                  boxSize={5}
                  color="#1DB954"
                />
              ) : (
                <Icon
                  as={HiOutlineHeart}
                  justify="center"
                  boxSize={5}
                  color="#D2CDCC"
                  _hover={{ color: "#fff" }}
                />
              )}
            </HStack>
          </Flex>

          <HStack spacing={4}>
            <Icon boxSize="30px" as={TiArrowShuffle} />
            <Icon
              boxSize="30px"
              as={BsFillSkipStartFill}
              onClick={() => {
                prevTrack(dispatch);
              }}
            />
            {isPlaying ? (
              <Icon
                boxSize="32px"
                _hover={{ transform: "scale(1.05)" }}
                transition="all 0.3 ease"
                as={BsPauseCircleFill}
                onClick={() => {
                  pauseTrack(dispatch);
                }}
              />
            ) : (
              <Icon
                boxSize="32px"
                _hover={{ transform: "scale(1.05)" }}
                transition="all 0.3s ease"
                as={BsPlayCircleFill}
                onClick={() => {
                  playTrack("", dispatch);
                }}
              />
            )}
            <Icon
              boxSize="30px"
              as={BsFillSkipEndFill}
              onClick={() => {
                nexTrack(dispatch);
              }}
            />
            <Icon boxSize="30px" as={BsArrowRepeat} />
          </HStack>

          <Flex align="center" justify="flex-end">
            <Icon
              as={IoMdMicrophone}
              border="none"
              w="18px"
              h="18px"
              color="#D2CDCC"
              mr="15px"
            ></Icon>
            <Icon
              as={BsList}
              border="none"
              w="18px"
              h="18px"
              color="#D2CDCC"
              mr="15px"
            ></Icon>
            <Icon
              as={MdDevices}
              border="none"
              w="18px"
              h="18px"
              color="#D2CDCC"
              mr="15px"
            ></Icon>
            <Icon
              as={BiVolumeLow}
              border="none"
              w="18px"
              h="18px"
              color="#D2CDCC"
              mr="5px"
            ></Icon>
            <div w="10vw" h="5px">
              <input type="range" className="volumeBar"></input>
            </div>
            <Icon
              as={BsArrowsAngleExpand}
              border="none"
              w="15px"
              h="15px"
              color="#D2CDCC"
              mr="5px"
              ml="10px"
            ></Icon>
          </Flex>
        </HStack>
      ) : (
        <></>
      )}
    </>
  );
};

export default Footer;

