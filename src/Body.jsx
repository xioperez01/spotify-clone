import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar/Sidebar";
import { Topbar } from "./Topbar/Topbar";

export const Body = () => {
  const [view, setView] = React.useState("HOME");

  const handleView = (newView) => {
    setView(newView);
  };
  return (
    <>
    <Box maxWidth="100vw" height="100vh" p={0}>
      <Sidebar handleView={handleView} />
      <Topbar view={view} />
    </Box>
    </>
  );
};

