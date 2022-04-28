import React, { useState } from 'react';
import { Icon, Image, Text, Link, Flex } from '@chakra-ui/react';
import { BsThreeDots, BsFillPlayFill } from 'react-icons/bs';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';

const ItemLittleList = ({ member }) => {
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

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };
  return (
    <Flex
      color="#707070"
      w="46vw"
      h="58px"
      borderRadius="5px"
      p="9px"
      _hover={{
        backgroundColor: '#2a2a2a',
        color: 'white',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
      }}
      onMouseEnter={handleInHoverSong}
      onMouseLeave={handleOutHoverSong}
    >
      <Flex position="relative">
        {isHoverSong ? (
          <Icon
            as={BsFillPlayFill}
            position="absolute"
            color="white"
            left="3"
            top="3"
            boxSize={5}
          />
        ) : (
          <></>
        )}
        <Image src={member?.avatarUrl} />
      </Flex>
      <Flex direction="column" justify="center" align="flex-start" ml="20px">
        <Text
          fontWeight="600"
          color="white"
          _hover={{ cursor: 'context-menu' }}
        >
          {member?.name}
        </Text>
        <Text as={Link} fontSize="14px" fontWeight="500">
          {member?.handle}
        </Text>
      </Flex>
      <Flex
        align="center"
        justify="center"
        ml="auto"
        w="30%"
        position="relative"
      >
        {isLike ? (
          <Icon
            as={HiHeart}
            boxSize={5}
            color="#1DB954"
            onClick={handleLike}
            position="relative"
            right={6}
          />
        ) : isHoverSong ? (
          <Icon
            as={HiOutlineHeart}
            boxSize={5}
            color="#D2CDCC"
            _hover={{ color: '#fff' }}
            onClick={handleLike}
            position="relative"
            right={6}
            p="0"
            m="0"
          />
        ) : (
          <></>
        )}
        <Text
          position="relative"
          fontSize="15px"
          fontWeight="600"
          _hover={{ cursor: 'context-menu'}}
        >
          {calculateTime(member?.duration)}
        </Text>
        {isHoverSong ? (
          <Icon
            as={BsThreeDots}
            boxSize={5}
            _hover={{ color: '#fff' }}
            position="absolute"
            left="110px"
          />
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};

export default ItemLittleList;
