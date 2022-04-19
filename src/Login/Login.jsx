import React from 'react';
import { accessUrl } from '../spotify';
import { Button, Box, Text, Flex, Image } from '@chakra-ui/react';


export const Login = () => {
  return (
    <Flex bg="black" h="100vh" w="100vw" direction="column" justify="space-around" align="center">
      <Box>
        <Image
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="spotify-logo"
          w="90%"
          m="auto"
        />
        <Text color='white' ml="75%">By MAXI</Text>
      </Box>
      <Button colorScheme="spotify" borderRadius="20px" mt="auto" mb="50px">
        <a href={accessUrl}>Login with Spotify</a>
      </Button>
    </Flex>
  );
};
