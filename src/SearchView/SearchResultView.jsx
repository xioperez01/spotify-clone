import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { spotify } from "../App";
import { useLocation } from "react-router-dom";
import SearchResultMainCard from "../Shared/Cards/SearchResultMainCard";

const SearchResultView = () => {
  const { pathname } = useLocation();
  const newSearch = pathname.split("/")[2];
  const [searchResult, setSearchResult] = useState();
  //  console.log(searchResult);

  useEffect(() => {
    if (newSearch.length !== 0) {
      spotify
        .search(
          newSearch,
          ["album", "artist", "playlist", "track", "show", "episode"],
          { include_external: "audio", limit: 20, market: "CO" }
        )
        .then((data) => setSearchResult(data));
    }
  }, [newSearch]);

  const tracks = searchResult?.tracks?.items.sort(
    (a, b) => b?.popularity - a?.popularity
  );
  console.log(tracks);

  return !searchResult ? (
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
    />
  ) : (
    <Stack
      w="calc(100% - 240px)"
      h="calc(100% -  90px)"
      bgColor="#121212"
      position="absolute"
      top={0}
      right={0}
      overflowY="auto"
      overflowX="hidden"
      as="section"
      pb={{ base: 4, lg: 8 }}
      spacing={10}
    >
      <Flex direction={{ base: "column", md: "row" }}>
        <Stack px={{ base: 4, lg: 8 }} pt="80px" spacing={6}>
          <Heading color="white" fontSize="25px">
            Resultado principal
          </Heading>
          <SearchResultMainCard item={tracks[0]} />
        </Stack>
      </Flex>
    </Stack>
  );
};

export default SearchResultView;

