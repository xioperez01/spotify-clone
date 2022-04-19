import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar/Sidebar";

export const Body = () => {
  return (
    <Box maxWidth="100vw" height="100vh" p={0}>
      <Sidebar />
    </Box>
  );
};

