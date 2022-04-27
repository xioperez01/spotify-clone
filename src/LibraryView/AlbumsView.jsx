import React from "react";
import { Stack, Heading, SimpleGrid } from "@chakra-ui/react";
import { useDataLayerValue } from "../DataLayer";
import CardType2 from "../Shared/Cards/CardType2";

const AlbumsView = () => {
  const [{ savedAlbums }] = useDataLayerValue();

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
      {savedAlbums?.total !== 0 ? (
        <>
          {" "}
          <Heading color="white" fontSize="25px">
            Álbumes
          </Heading>
          <SimpleGrid
            columns={{ base: 2, md: 3, lg: 4, xl: 5, "2xl": 7 }}
            spacing={6}
            minChildWidth={savedAlbums?.items?.length <= 5 ? "" : "180px"}
          >
            {savedAlbums?.items?.map((i) => (
              <CardType2
                key={i?.album?.id}
                title={i?.album?.name}
                image={i?.album?.images[0]?.url}
                owner={i?.album?.artists[0]?.name}
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

export default AlbumsView;

