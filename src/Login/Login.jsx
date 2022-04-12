import React from 'react';
import { accessUrl } from '../spotify';
import { Button } from '@chakra-ui/react';

export const Login = () => {
  return (
    <div>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <Button
        colorScheme="spotify"
        borderRadius="20px"
      >
        <a href={accessUrl}>Login with Spotify</a>
      </Button>
      
    </div>
  );
};
