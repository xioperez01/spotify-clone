import React from 'react';
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Image,
  ScaleFade,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import {BsPlayCircleFill} from 'react-icons/bs';

const CardType2 = ({ item }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box
        w="230px"
        h="300px"
        bg="#181818"
        borderRadius="lg"
        overflow="hidden"
        align="center"
        p="15px"
        _hover={{
          cursor: 'pointer',
          background: '#282828',
          transitionDuration: '0.6s',
          transitionTimingFunction: 'ease-in-out',
        }}
        onMouseEnter={onToggle}
        onMouseLeave={onToggle}
      >
        <Image
          src={item?.images[0].url}
          alt="AlbumImage"
          borderRadius="5px"
          boxSize="190px"
          align="center"
        />
        <ScaleFade initialScale={0.9} in={isOpen}>
          <Icon
            as={BsPlayCircleFill}
            color="#1ED760"
            boxSize="45px"
            shadow="md"
            position="absolute"
            ml="40px"
            mt="-50px"
            bg="black"
            borderRadius="50%"
            _hover={{ transform: 'scale(1.1)' }}
          />
        </ScaleFade>

        <Flex direction="column" align="flex-start" mt="5">
          <Text
            fontSize="md"
            fontWeight="bold"
            color="white"
            isTruncated
            maxW="100%"
          >
            {item?.name}
          </Text>
          <Text
            fontSize="sm"
            fontWeight="semi-bold"
            color="#D2CDCC"
            opacity="0.7"
            pt="3px"
            isTruncated
            maxW="100%"
          >
            De {item?.owner?.display_name}
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default CardType2;
