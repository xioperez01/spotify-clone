import {
  Box,
  Container,
  Flex,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { TiArrowSortedDown } from 'react-icons/ti';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import { MdOutlinePauseCircleFilled, MdPlayCircleFilled } from 'react-icons/md';
import {
  BsArrowDownCircle,
  BsThreeDots,
  BsPlayCircleFill,
  BsPauseCircleFill,
} from 'react-icons/bs';
import MemberTable from './MemberTable';

const PlaylistTable = () => {
  const [like, setLike] = useState(false);
  const [isPlay, setIsPlay] = useState(false);

  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  const handleLike = () => {
    setLike(!like);
  };
  const handlePlay = () => {
    setIsPlay(!isPlay);
  };

  return (
    <Container p="10" minW="100%">
      <Box>
        <Stack spacing="5">
          <Box px="6" pt="5">
            <Flex justify="space-between">
              <Flex align="center" position="relative">
                {isPlay ? (
                  <Icon
                    as={MdOutlinePauseCircleFilled}
                    onClick={handlePlay}
                    position="relative"
                    right="30px"
                    color="#1ED760"
                    borderColor="#1ED760"
                    boxSize="65px"
                    _hover={{
                      transform: 'scale(1.1)',
                      transitionDuration: '0.3s',
                    }}
                  ></Icon>
                ) : (
                  <Icon
                    as={MdPlayCircleFilled}
                    onClick={handlePlay}
                    position="relative"
                    right="30px"
                    color="#1ED760"
                    boxSize="65px"
                    _hover={{
                      transform: 'scale(1.1)',
                      transitionDuration: '0.3s',
                    }}
                  />
                )}
                {like ? (
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
                    _hover={{ color: '#fff' }}
                  />
                )}
                <Icon
                  as={BsArrowDownCircle}
                  boxSize="30px"
                  color="#D2CDCC"
                  _hover={{ color: '#fff' }}
                  ml="20px"
                  mr="10px"
                />
                <Icon
                  as={BsThreeDots}
                  boxSize="35px"
                  color="#D2CDCC"
                  _hover={{ color: '#fff' }}
                  m="0 10px"
                />
              </Flex>
              <Flex align="center" justify="space-between">
                <Icon
                  boxSize="18px"
                  as={FiSearch}
                  color="white"
                  _hover={{
                    cursor: 'pointer',
                    backgroundColor: '#665e5b',
                    borderRadius: '50%',
                    transitionDuration: '0.6s',
                    transitionTimingFunction: 'ease-in-out',
                  }}
                ></Icon>
                <Flex
                  align="center"
                  color="#D2CDCC"
                  ml="30px"
                  _hover={{ color: 'white', cursor: 'context-menu' }}
                >
                  <Text fontSize="14px">Orden personalizado</Text>
                  <Icon boxSize="18px" ml="10px" as={TiArrowSortedDown}></Icon>
                </Flex>
              </Flex>
            </Flex>
          </Box>
          <Box maxW="100%">
            <MemberTable />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default PlaylistTable;
