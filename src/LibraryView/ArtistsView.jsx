import React from "react";
import { Stack, Heading, SimpleGrid } from "@chakra-ui/react";
import { useDataLayerValue } from "../DataLayer";
import ArtistCard from "../Shared/Cards/ArtistCard";

const ArtistsView = () => {
  const [{ followedArtists }] = useDataLayerValue();

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
      {followedArtists.artists.items.length !== 0 ? (
        <>
          <Heading color="white" fontSize="25px">
            Artistas
          </Heading>
          <SimpleGrid
            columns={{ base: 2, md: 3, lg: 4, xl: 5, "2xl": 7 }}
            spacing={6}
            minChildWidth={
              followedArtists?.artists?.items?.length <= 5 ? "" : "180px"
            }
          >
            {followedArtists?.artists?.items?.map((i) => (
              <ArtistCard
                key={i?.id}
                title={i?.name}
                image={i?.images[0]?.url}
                type="Artista"
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

export default ArtistsView;

