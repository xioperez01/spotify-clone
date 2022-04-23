import React from "react";
import { Box } from "@chakra-ui/react";

const MainSecction = () => {
  return (
    <Box
      w="calc(100% - 240px)"
      bgColor="#1D1D1D"
      position="absolute"
      top={0}
      right={0}
      h="calc(100% -  90px)"
      overflowY="auto"
      as="section"
    ></Box>
  );
};

export default MainSecction;

