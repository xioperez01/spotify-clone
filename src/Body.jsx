import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar/Sidebar";
import { Topbar } from "./Topbar/Topbar";

export const Body = () => {
  return (
    <Box maxWidth="100vw" height="100vh" p={0}>
      <Sidebar />
      <Topbar />
    </Box>
  );
};

