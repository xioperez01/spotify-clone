import React from 'react';
import {
  Flex,
  Image,
  Text,
  ScaleFade,
  Icon,
  useDisclosure,
  Circle,
} from '@chakra-ui/react';
import { BsPlayCircleFill } from 'react-icons/bs';

const SearchResultCard = ({ item }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex
      position="relative"
      bgColor="#181818"
      borderRadius="10px"
      direction="column"
      p="22px"
      justify="flex-start"
      align="flex-start"
      color="white"
      w="470px"
      h="220px"
      _hover={{
        cursor: 'pointer',
        backgroundColor: "#282828",
        transitionDuration: '0.6s',
        transitionTimingFunction: 'ease-in-out',
      }}
      onMouseEnter={onToggle}
      onMouseLeave={onToggle}
    >
      <Image
        src={item?.image?.url}
        boxSize="90px"
        borderRadius="5px"
        shadow="dark-lg"
        mb="20px"
      />
      <Text fontSize="30px" fontWeight="bold">
        {item.name}
      </Text>
      <Text fontSize="12px" fontWeight="bold" backgroundColor="#202020" p="3px 15px" borderRadius="15px">{item?.description}</Text>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Circle
          bg="black"
          boxSize="40px"
          position="absolute"
          right={7}
          bottom={7}
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
    </Flex>
  );
};

export default SearchResultCard;
