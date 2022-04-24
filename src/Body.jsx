import React from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import Footer from "./Footer/Footer";
import HomeView from "./HomeView/HomeView";

const Body = () => {
  const [view, setView] = React.useState("HOME");

  const handleView = (newView) => {
    setView(newView);
  };
  return (
    <>
      <Box maxWidth="100vw" height="100vh" minH="500px" p={0} overflowY="auto">
        <Sidebar handleView={handleView} />
        <Topbar view={view} />
        <HomeView />
        <Footer
          id="2tyMOrVliF1wRnumVdcEwP"
          link="https://p.scdn.co/mp3-preview/16d50011b201dd1cbd0ef3b40d0d5cb238650c5b?cid=5247023442364a818f07a5d4dd06877f"
        />
      </Box>
    </>
  );
};

export default Body;

