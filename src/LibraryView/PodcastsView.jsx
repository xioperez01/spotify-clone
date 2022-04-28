import React from "react";
import { Stack, Heading, SimpleGrid, GridItem } from "@chakra-ui/react";
import { useDataLayerValue } from "../DataLayer";
import CardType2 from "../Shared/Cards/CardType2";
import BigCard from "../Shared/Cards/BigCard";

const PodcastsView = () => {
  const [{ savedShows }] = useDataLayerValue();

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
      {savedShows.total !== 0 ? (
        <>
          <Heading color="white" fontSize="25px">
            Podcasts
          </Heading>
          <SimpleGrid
            columns={{ base: 2, md: 3, lg: 4, xl: 5, "2xl": 7 }}
            spacing={6}
            minChildWidth={savedShows?.items?.length <= 5 ? "" : "180px"}
          >
            <GridItem colStart={1} colEnd={{ base: 2, md: 3 }} rowSpan={1}>
              <BigCard
                title="Tus Episodios"
                total={0}
                color="linear-gradient(135deg, rgba(65,1,244,1) -50%, rgba(0,100,78,1) 0%, rgba(9,107,84,1) 50%, rgba(38,132,105,1) 100%)"
              />
            </GridItem>

            {savedShows?.items?.map((i) => (
              <CardType2
                key={i?.show?.id}
                title={i?.show?.name}
                image={i?.show?.images[0]?.url}
                owner={i?.show?.publisher}
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

export default PodcastsView;

