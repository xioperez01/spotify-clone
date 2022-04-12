import React from 'react';
import { accessUrl } from '../spotify';
import { Button } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

export const Login = () => {
  return (
    <div>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <Button
        colorScheme="green"
        borderRadius="20px"
      >
        <a href={accessUrl}>Login</a>
      </Button>
      
    </div>
  );
};
