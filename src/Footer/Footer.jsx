import { Flex, HStack, Icon, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { useState, useEffect } from 'react';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import SpotifyWebApi from 'spotify-web-api-js';
import Waveform from './AudioPlayer';
import Player from './Player';

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

  console.log('track: ', track);
  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(!like);
  };

  return (
    <>
      {Object.keys(track).length !== 0 ? (
        <Flex
          bg="#282828"
          height="90px"
          w="100%"
          position="fixed"
          bottom="0"
          justify="space-between"
          align="center"
          color="white"
          p="16px"
          zIndex="100"
        >
          <Flex>
            <Image
              boxSize="56px"
              objectFit="cover"
              src={track.album.images[2].url}
              alt="Dan Abramov"
            />
            <Flex direction="column" pl="16px" justify="center">
              <Link fontWeight="semibold" fontSize="sm">
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
                  _hover={{ color: '#fff' }}
                />
              )}
            </HStack>
          </Flex>
          <Player url={link}></Player>
          {/* <Waveform url={track.preview_url} />*/}
          <Flex>Flex right</Flex>
        </Flex>
      ) : (
        <></>
      )}
    </>
  );
};

export default Footer;
