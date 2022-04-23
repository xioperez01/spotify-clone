import React from "react";
import { Box } from "@chakra-ui/react";

const MainSecction = () => {
  return (
    <Box
      w="calc(100% - 240px)"
      bgColor="#1D1D1D"
      position="absolute"
      top="60px"
      right={0}
      h="calc(100% - (60px + 90px))"
      overflowY="auto"
      as="section"
    ></Box>
  );
};

export default MainSecction;

