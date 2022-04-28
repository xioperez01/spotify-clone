import React from 'react';
import {
  Flex,
  Text,
  ScaleFade,
  Icon,
  useDisclosure,
  Circle,
} from '@chakra-ui/react';
import { BsPlayCircleFill } from 'react-icons/bs';

const bigCardLists = {
  artists:
    'BTSCarbon Fiber Music Hard Lights Sonora Carruseles y mucha mas musica que me gusta',
  num: 50,
  title: 'Canciones que te gustan',
  description: 'canciones que te gustan',
  color: '#3940E7',
};
const bigCardPodcasts = {
  artists: 'BTSCarbon Fiber Music Hard Lights Sonora Carruseles',
  num: 10,
  title: 'Tus episodios',
  description: 'episodios',
  gradient:
    'linear-gradient(149deg, rgba(58,77,180,1) 0%, rgba(122,29,253,1) 47%, rgba(69,233,252,1) 100%)',
  color: '#4DCA78',
};

const BigCard = ({ item }) => {
  {
    /**
     * Prameters:
     * item.artist = str
     * item.num = num
     * item.title = str
     * item.description = str 
     * */
  }
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      w="420px"
      h="270px"
      position="relative"
      background="linear-gradient(149deg, rgba(58,77,180,1) 0%, rgba(122,29,253,1) 47%, rgba(69,233,252,1) 100%)"
      borderRadius="10px"
      direction="column"
      align="flex-start"
      justify="flex-end"
      p="20px 10px"
      _hover={{
        cursor: 'pointer',
        transitionDuration: '0.6s',
        transitionTimingFunction: 'ease-in-out',
      }}
      onMouseEnter={onToggle}
      onMouseLeave={onToggle}
    >
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Circle
          bg="black"
          boxSize="40px"
          position="absolute"
          right={6}
          bottom={6}
        >
          <Icon
            as={BsPlayCircleFill}
            color="#1ED760"
            borderColor="#1ED760"
            boxSize="45px"
            shadow="dark-lg"
            rounded="full"
            _hover={{ transform: 'scale(1.1)', transitionDuration: '0.3s' }}
          />
        </Circle>
      </ScaleFade>
      <Text fontSize="md" ml="10px" mb="30px">
        {item?.artists}
      </Text>
      <Text fontSize="3xl" fontWeight="bold" ml="10px">
        {item?.title}
      </Text>
      <Text fontSize="md" ml="10px">
        {item?.num} {item.description}
      </Text>
    </Flex>
  );
};

export default BigCard;
