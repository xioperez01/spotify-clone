import { Box } from "@mui/material";
import React from "react";
import { Sidebar } from "./Sidebar/Sidebar";

export const Body = () => {
  return (
    <Box maxWidth="100vw" height="100vh" p={0}>
      <Sidebar />
    </Box>
  );
};

