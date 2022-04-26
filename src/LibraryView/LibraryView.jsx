import React, { useEffect } from "react";
import { Stack, Heading, SimpleGrid, GridItem } from "@chakra-ui/react";
import { useDataLayerValue } from "../DataLayer";
import CardType2 from "../Shared/Cards/CardType2";
import { spotify } from "../App";
import BigCard from "../Shared/Cards/BigCard";

const LibraryView = () => {
  const [{ playlists }] = useDataLayerValue();

  return (
    <Stack
      w="calc(100% - 240px)"
      h="calc(100% -  90px)"
      bgColor="#1D1D1D"
      position="absolute"
      top={0}
      right={0}
      overflowY="auto"
      overflowX="hidden"
      as="section"
      spacing={10}
      pb={{ base: 4, lg: 8 }}
      pt="80px"
      px={{ base: 4, lg: 8 }}
    >
      <Heading color="white" fontSize="25px">
        Listas
      </Heading>
      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 4, xl: 5, "2xl": 7 }}
        spacing={6}
      >
        <GridItem colStart={1} colEnd={3}>
          <BigCard />
        </GridItem>

        {playlists?.items?.map((i) => (
          <CardType2 key={i?.id} item={i} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default LibraryView;

