import React, { useState, useRef } from 'react';
import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Link,
} from '@chakra-ui/react';
import { BiTime } from 'react-icons/bi';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import { BsThreeDots, BsFillPlayFill } from 'react-icons/bs';
import { members } from './data';

const MemberTable = (props) => {
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const mySong = useRef();
  const [isHoverSong, setIsHoverSong] = useState(false);
  const [isLike, setIsLike] = useState(false);

  const handleInHoverSong = () => {
    setIsHoverSong(true);
    console.log('entró');
  };

  const handleOutHoverSong = () => {
    setIsHoverSong(false);
    console.log('salió');
  };

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <Table {...props}>
      <Thead>
        <Tr>
          <Th borderBottom="1px" borderBottomColor="#5F6762" w="60vw">
            <Flex justify="flex-start">
              <Text fontSize="20px" color="#D2CDCC" mr="20px">
                #
              </Text>
              <Text
                color="#D2CDCC"
                _hover={{ cursor: 'context-menu', color: 'white' }}
              >
                TÍTULO
              </Text>
            </Flex>
          </Th>
          <Th
            color="#D2CDCC"
            borderBottom="1px"
            borderBottomColor="#5F6762"
            _hover={{ cursor: 'context-menu', color: 'white' }}
          >
            ÁLBUM
          </Th>
          <Th
            color="#D2CDCC"
            isTruncated
            borderBottom="1px"
            borderBottomColor="#5F6762"
            _hover={{ cursor: 'context-menu', color: 'white' }}
          >
            FECHA INCORPORACIÓN
          </Th>
          <Th
            w="90px"
            color="#D2CDCC"
            borderBottom="1px"
            borderBottomColor="#5F6762"
          >
            <Flex justify="flex-end">
              <Icon
                boxSize="20px"
                position="relative"
                right="30px"
                as={BiTime}
                _hover={{ cursor: 'context-menu', color: 'white' }}
              ></Icon>
            </Flex>
          </Th>
        </Tr>
      </Thead>
      <Tbody color="#D2CDCC" fontSize="14px">
        {members.map((member) => (
          <Tr
            ref={mySong}
            key={member.id}
            _hover={{
              backgroundColor: '#2a2a2a',
              color: 'white',
              transitionDuration: '0.6s',
              transitionTimingFunction: 'ease-in-out',
            }}
            _focus={{ backgroundColor: '#665e5b' }}
            onMouseEnter={handleInHoverSong}
            onMouseLeave={handleOutHoverSong}
            onMouseDown={() => {
              console.log('hizo down');
            }}
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
                {isHoverSong ? (
                  <Icon
                    as={HiOutlineHeart}
                    onClick={setIsLike}
                    boxSize="20px"
                    color="#D2CDCC"
                    position="relative"
                    right="20px"
                    _hover={{ color: '#fff' }}
                  />
                ) : (
                  <></>
                )}
                <Text
                  color="muted"
                  _hover={{ cursor: 'context-menu' }}
                  isTruncated
                >
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
        ))}
      </Tbody>
    </Table>
  );
};

export default MemberTable;
