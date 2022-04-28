import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Albumes = () => {
  return (
    <Flex direction="column" align="center" m="auto" p="20px" w="50vw">
      <Center
        border="2px"
        borderColor="white"
        borderRadius="50%"
        boxSize="65px"
        justify="center"
        align="center"
        mb="18px"
      >
        <Box
          border="2px"
          borderColor="white"
          borderRadius="50%"
          boxSize="20px"
        />
      </Center>
      <Text fontSize="3xl" fontWeight="bold" color="white">
        Sigue tu primer álbum
      </Text>
      <Text fontSize="15px" color="white" mt="12px" mb="15px">
        Guarda álbumes pulsando el icono del corazón.
      </Text>
      <Center
        as={Button}
        backgroundColor="white"
        borderRadius="50px"
        fontSize="15px"
        fontWeight="bold"
        href="/search"
        h="48px"
        w="207px"
        _hover={{
          backgroundColor: 'white',
          transform: "scale(1.1)",
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in-out',
        }}
      >
        Encontrar álbumes
      </Center>
    </Flex>
  );
};

export default Albumes;
