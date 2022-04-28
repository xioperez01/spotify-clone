import React, { useEffect, useState } from "react";
import { Flex, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { spotify } from "../App";
import { gradientGenerator } from "../Shared/Functions/colorGenerator";
import CardType2 from "../Shared/Cards/CardType2";

const GenreView = () => {
  const { pathname } = useLocation();

  const [genre, setGenre] = useState();
  const [playLists, setPlayLists] = useState([]);

  const id = pathname.split("/")[2];

  useEffect(() => {
    spotify.getCategory(id).then((data) => setGenre(data));
    spotify
      .getCategoryPlaylists(id)
      .then((data) => setPlayLists(data.playlists));
  }, []);

  const gradient = gradientGenerator();

  return (
    <Box
      w="calc(100% - 240px)"
      h="calc(100% -  90px)"
      bgColor="#1D1D1D"
      position="absolute"
      top={0}
      right={0}
      overflowY="auto"
      overflowX="hidden"
      as="section"
      pb={{ base: 4, lg: 8 }}
    >
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="end"
        h="40vh"
        w="100%"
        px={{ base: 4, lg: 8 }}
        pb={8}
        bg={gradient}
        mb={10}
      >
        <Heading fontSize="max(5vw, 50px)" color="white">
          {genre?.name}
        </Heading>
      </Flex>
      <Box px={{ base: 4, lg: 8 }}>
        <Heading mb={8} color="white" fontSize="25px">
          Listas
        </Heading>
        <SimpleGrid
          columns={{ base: 2, md: 3, lg: 4, xl: 5, "2xl": 7 }}
          spacing={6}
          minChildWidth={playLists?.items?.length <= 5 ? "" : "180px"}
        >
          {playLists.items?.map((pl) =>
            pl !== null ? (
              <CardType2
                key={pl?.id}
                title={pl?.name}
                image={pl?.images[0]?.url}
                description={pl?.description}
                owner={pl?.owner?.display_name}
              />
            ) : (
              <></>
            )
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default GenreView;

