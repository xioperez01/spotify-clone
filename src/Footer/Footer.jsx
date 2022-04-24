
import { Flex, Grid, HStack, Icon, Image, Link } from '@chakra-ui/react';
import React, { useState, useRef, useEffect } from 'react';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import { IoMdMicrophone } from 'react-icons/io';
import { BsList, BsArrowsAngleExpand } from 'react-icons/bs';
import { MdDevices } from 'react-icons/md';
import { BiVolumeLow } from 'react-icons/bi';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import './Styles/Footer.css'

const spotify = new SpotifyWebApi();

const Footer = ({ id, link }) => {
  const [track, setTrack] = useState({});

  const getSong = () => {
    spotify.getTrack(id).then((track) => {
      setTrack(track);
    });
  };

  useEffect(() => {
    getSong();
  }, []);

  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(!like);
  };

  return (
    <>
      {Object.keys(track).length !== 0 ? (
        <Grid
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
          <Flex maxWidth="27vw">
            <Image
              boxSize="56px"
              objectFit="cover"
              src={track.album.images[2].url}
              alt="Dan Abramov"
            />
            <Flex direction="column" pl="16px" justify="center">
              <Link fontWeight="semibold" fontSize="sm" overflow="hidden">
                {track.name}
              </Link>
              <Link fontSize="xs" color="#D2CDCC">
                {track.artists[0].name}
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
          <Player url={link}></Player>
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
              <input type="range" className='volumeBar'></input>
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
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
};

export default Footer;

