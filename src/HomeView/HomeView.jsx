import React from "react";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useDataLayerValue } from "../DataLayer";
import CardType1 from "../Shared/Cards/CardType1";
import { colorGenerate } from "../Shared/Functions/changeBgColor";

const HomeView = () => {
  const [{ playlists }] = useDataLayerValue();
  const [color, setColor] = React.useState("");

  const handleChangeColor = (color) => {
    setColor(colorGenerate(color));
  };

  const currentHour = new Date().getHours();
  return (
    <Box
      w="calc(100% - 240px)"
      bgColor="#1D1D1D"
      position="absolute"
      top={0}
      right={0}
      h="calc(100% -  90px)"
      overflowY="auto"
      overflowX="hidden"
      as="section"
    >
      <Box
        pt="80px"
        px={{ base: 4, lg: 8 }}
        bg={color}
        transition="background 2s"
      >
        <Heading color="white" fontSize="32px">
          {currentHour <= 12
            ? "¡Buenos días!"
            : currentHour > 12 && currentHour <= 18
            ? "¡Buenas tardes!"
            : "¡Buenas noches!"}
        </Heading>
        <Grid
          w="100%"
          h="auto"
          mt={6}
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          templateRows={{ base: "repeat(3, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={4}
        >
          <GridItem>
            <CardType1 onChangeColor={handleChangeColor} />
          </GridItem>

          {playlists?.items?.map((list, index) =>
            index <= 4 ? (
              <GridItem key={list?.id}>
                <CardType1 item={list} onChangeColor={handleChangeColor} />
              </GridItem>
            ) : (
              <></>
            )
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeView;

