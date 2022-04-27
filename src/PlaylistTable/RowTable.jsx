import React, { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Td,
  Text,
  Tr,
  Link,
} from '@chakra-ui/react';
import { BsThreeDots, BsFillPlayFill } from 'react-icons/bs';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';

const Row = ({ member, isCurrentLike = true }) => {
  const [isLike, setIsLike] = useState(isCurrentLike);
  const [isHoverSong, setIsHoverSong] = useState(false);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

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
        backgroundColor: '#2a2a2a',
        color: 'white',
        transitionDuration: '0.6s',
        transitionTimingFunction: 'ease-in-out',
      }}
      _focus={{ backgroundColor: '#665e5b' }}
      onMouseEnter={handleInHoverSong}
      onMouseLeave={handleOutHoverSong}
    >
      <Td border="none">
        <HStack spacing="3">
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
              _hover={{ cursor: 'context-menu' }}
            >
              {member.id}
            </Text>
          )}

          <Image name={member.name} src={member.avatarUrl} boxSize="10" />
          <Box>
            <Text
              fontWeight="medium"
              color="white"
              isTruncated
              _hover={{ cursor: 'context-menu' }}
            >
              {member.name}
            </Text>
            <Text as={Link} p="0" isTruncated>
              {member.handle}
            </Text>
          </Box>
        </HStack>
      </Td>

      <Td border="none">
        <Text as={Link} color="muted" isTruncated>
          {member.email}
        </Text>
      </Td>
      <Td border="none">
        <Text color="muted" isTruncated>
          {member.role}
        </Text>
      </Td>
      <Td border="none">
        <Flex width="90px" justify="center">
          {isLike ? (
            <Icon
              as={HiHeart}
              onClick={handleLike}
              boxSize="20px"
              color="green"
              position="relative"
              right="20px"
            />
          ) : isHoverSong ? (
            <Icon
              as={HiOutlineHeart}
              onClick={handleLike}
              boxSize="20px"
              color="#D2CDCC"
              position="relative"
              right="20px"
              _hover={{ color: '#fff' }}
            />
          ) : (
            <></>
          )}
          <Text color="muted" _hover={{ cursor: 'context-menu' }} isTruncated>
            {calculateTime(member.duration)}
          </Text>
          {isHoverSong ? (
            <Icon
              as={BsThreeDots}
              boxSize="20px"
              color="#D2CDCC"
              position="relative"
              left="10px"
            />
          ) : (
            <></>
          )}
        </Flex>
      </Td>
    </Tr>
  );
};

export default Row;
