import React from "react";
import { Box, Grid, Heading } from "@chakra-ui/react";
import { useDataLayerValue } from "../DataLayer";
import CardType1 from "../Shared/Cards/CardType1";

const HomeView = () => {
  const [{ playlists }] = useDataLayerValue();
  console.log(playlists);

  const currentHour = new Date().getHours();
  console.log(currentHour);
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
      pt="80px"
      px={8}
    >
      <Heading color="white" fontSize="32px">
        {currentHour <= 12 ? "¡Buenos dias!" : ""}
      </Heading>
      <Grid
        w="100%"
        h="auto"
        mt={8}
        templateColumns='repeat(3, 1fr)'
        templateRows='repeat(2, 1fr)'
        gap={4}
      >
        {playlists?.items?.map((list, index) =>
          index <= 5 ? <CardType1 key={list?.id} item={list} /> : <></>
        )}
      </Grid>
    </Box>
  );
};

export default HomeView;

