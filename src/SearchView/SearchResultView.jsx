import React, { useEffect, useState } from "react";
import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Table,
  Tbody,
  Flex,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { spotify } from "../App";
import { useLocation } from "react-router-dom";
import SearchResultMainCard from "../Shared/Cards/SearchResultMainCard";
import ItemLittleList from "../Shared/Cards/ItemLittleList";
import ArtistCard from "../Shared/Cards/ArtistCard";
import CardType2 from "../Shared/Cards/CardType2";
import { milliSecondsToMinutes } from "../Shared/Functions/secondsToMinutes";

const SearchResultView = () => {
  const { pathname } = useLocation();
  const newSearch = pathname.split("/")[2];
  const [searchResult, setSearchResult] = useState();

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

  const albums = searchResult?.albums?.items.sort(
    (a, b) => a?.popularity - b?.popularity
  );

  const artists = searchResult?.artists?.items.sort(
    (a, b) => b?.popularity - a?.popularity
  );

  const episodes = searchResult?.episodes?.items.sort(
    (a, b) => b?.popularity - a?.popularity
  );
  const shows = searchResult?.shows?.items.sort(
    (a, b) => b?.popularity - a?.popularity
  );

  const playlists = searchResult?.playlists?.items.sort(
    (a, b) => b?.popularity - a?.popularity
  );

  const itemsToDisplay = useBreakpointValue({
    base: 2,
    md: 3,
    lg: 4,
    xl: 5,
    "2xl": 7,
  });

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
      <SimpleGrid
        columns={{ base: 1, md: 4, lg: 3 }}
        px={{ base: 4, lg: 8 }}
        pt="80px"
        w="100%"
        spacing={8}
      >
        <GridItem colSpan={{ base: 1, md: 2, lg: 1 }}>
          <Stack spacing={6}>
            <Heading color="white" fontSize="25px">
              Resultado principal
            </Heading>
            <SearchResultMainCard item={tracks[0]} />
          </Stack>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 2, lg: 2 }}>
          <Stack spacing={6}>
            <Heading color="white" fontSize="25px">
              Canciones
            </Heading>
            <Table>
              <Tbody>
                {tracks?.map((tr, index) =>
                  index !== 0 && index < 5 ? (
                    <ItemLittleList key={tr?.id} item={tr} />
                  ) : (
                    <></>
                  )
                )}
              </Tbody>
            </Table>
          </Stack>
        </GridItem>
      </SimpleGrid>
      {artists.length !== 0 ? (
        <Stack
          px={{ base: 4, lg: 8 }}
          w="100%"
          h="auto"
          color="white"
          spacing={6}
        >
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading fontSize="25px">Artistas</Heading>
            <Link fontSize="xs" color="#D2CDCC" opacity="0.7" fontWeight="bold">
              VER TODO
            </Link>
          </Flex>
          <SimpleGrid columns={itemsToDisplay} gap={4}>
            {artists?.map((i, index) =>
              index < itemsToDisplay ? (
                <GridItem key={i?.id}>
                  <ArtistCard
                    key={i?.id}
                    title={i?.name}
                    image={i?.images[0]?.url}
                    type="Artista"
                  />
                </GridItem>
              ) : (
                <></>
              )
            )}
          </SimpleGrid>
        </Stack>
      ) : (
        <></>
      )}
      {albums.length !== 0 ? (
        <Stack
          px={{ base: 4, lg: 8 }}
          w="100%"
          h="auto"
          color="white"
          spacing={6}
        >
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading fontSize="25px">Álbumes</Heading>
            <Link fontSize="xs" color="#D2CDCC" opacity="0.7" fontWeight="bold">
              VER TODO
            </Link>
          </Flex>
          <SimpleGrid columns={itemsToDisplay} gap={4}>
            {albums?.map((i, index) =>
              index < itemsToDisplay ? (
                <GridItem key={i?.id}>
                  <CardType2
                    title={i?.name}
                    image={i?.images[0]?.url}
                    description={i?.description}
                    owner={i?.artists.map((a) => a?.name).join(", ")}
                    id={i?.id}
                  />
                </GridItem>
              ) : (
                <></>
              )
            )}
          </SimpleGrid>
        </Stack>
      ) : (
        <></>
      )}
      {playlists.length !== 0 ? (
        <Stack
          px={{ base: 4, lg: 8 }}
          w="100%"
          h="auto"
          color="white"
          spacing={6}
        >
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading fontSize="25px">Listas</Heading>
            <Link fontSize="xs" color="#D2CDCC" opacity="0.7" fontWeight="bold">
              VER TODO
            </Link>
          </Flex>
          <SimpleGrid columns={itemsToDisplay} gap={4}>
            {playlists?.map((i, index) =>
              index < itemsToDisplay ? (
                <GridItem key={i?.id}>
                  <CardType2
                    title={i?.name}
                    image={i?.images[0]?.url}
                    description={i?.description}
                    owner={i?.owner?.display_name}
                    id={i?.id}
                  />
                </GridItem>
              ) : (
                <></>
              )
            )}
          </SimpleGrid>
        </Stack>
      ) : (
        <></>
      )}
      {shows.length !== 0 ? (
        <Stack
          px={{ base: 4, lg: 8 }}
          w="100%"
          h="auto"
          color="white"
          spacing={6}
        >
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading fontSize="25px">Pódcasts</Heading>
            <Link fontSize="xs" color="#D2CDCC" opacity="0.7" fontWeight="bold">
              VER TODO
            </Link>
          </Flex>
          <SimpleGrid columns={itemsToDisplay} gap={4}>
            {shows?.map((i, index) =>
              index < itemsToDisplay ? (
                <GridItem key={i?.id}>
                  <CardType2
                    title={i?.name}
                    image={i?.images[0]?.url}
                    description={i?.description}
                    owner={i?.publisher}
                    id={i?.id}
                  />
                </GridItem>
              ) : (
                <></>
              )
            )}
          </SimpleGrid>
        </Stack>
      ) : (
        <></>
      )}
      {episodes.length !== 0 ? (
        <Stack
          px={{ base: 4, lg: 8 }}
          w="100%"
          h="auto"
          color="white"
          spacing={6}
        >
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading fontSize="25px">Episodios</Heading>
            <Link fontSize="xs" color="#D2CDCC" opacity="0.7" fontWeight="bold">
              VER TODO
            </Link>
          </Flex>
          <SimpleGrid columns={itemsToDisplay} gap={4}>
            {episodes?.map((i, index) =>
              index < itemsToDisplay ? (
                <GridItem key={i?.id}>
                  <CardType2
                    title={i?.name}
                    image={i?.images[0]?.url}
                    description={`${milliSecondsToMinutes(
                      i?.duration_ms
                    )} MIN.`}
                    id={i?.id}
                  />
                </GridItem>
              ) : (
                <></>
              )
            )}
          </SimpleGrid>
        </Stack>
      ) : (
        <></>
      )}
    </Stack>
  );
};

export default SearchResultView;

