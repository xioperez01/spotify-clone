import React from "react";
import { Stack, Heading, SimpleGrid, GridItem } from "@chakra-ui/react";
import { useDataLayerValue } from "../DataLayer";
import CardType2 from "../Shared/Cards/CardType2";
import BigCard from "../Shared/Cards/BigCard";

const ListsView = () => {
  const [{ playlists, savedTracks }] = useDataLayerValue();

  const description = savedTracks?.items
    ?.slice(0, 8)
    .map((t) => `${t.track.artists[0].name} ${t.track.name}`)
    .join(" * ");

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
      {savedTracks.total !== 0 && playlists.total !== 0 ? (
        <>
          <Heading color="white" fontSize="25px">
            Listas
          </Heading>
          <SimpleGrid
            columns={{ base: 2, md: 3, lg: 4, xl: 5, "2xl": 7 }}
            spacing={6}
            minChildWidth={playlists?.items?.length <= 5 ? "" : "180px"}
          >
            <GridItem colStart={1} colEnd={{ base: 2, md: 3 }} rowSpan={1}>
              <BigCard
                title="Canciones que te gustan"
                description={description}
                total={savedTracks?.total}
                color="linear-gradient(135deg, rgba(65,1,244,1) -50%, rgba(99,63,236,1) 40%, rgba(187,227,216,1) 150%)"
              />
            </GridItem>

            {playlists?.items?.map((i) => (
              <CardType2
                key={i?.id}
                id={i?.id}
                title={i?.name}
                image={i?.images[0]?.url}
                description={i?.description}
                owner={i?.owner?.display_name}
              />
            ))}
          </SimpleGrid>
        </>
      ) : (
        <></>
      )}
    </Stack>
  );
};

export default ListsView;

