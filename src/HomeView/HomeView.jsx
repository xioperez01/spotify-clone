import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useDataLayerValue } from "../DataLayer";
import CardType1 from "../Shared/Cards/CardType1";
import { colorGenerate } from "../Shared/Functions/changeBgColor";
import CardType2 from "../Shared/Cards/CardType2";
import { spotify } from "../App";
import PlaylistTable from '../PlaylistTable/PlaylistTable';

const HomeView = () => {
  const [{ playlists, featuredPlaylists, recentlyPlaylists }, dispatch] =
    useDataLayerValue();
  const [newMusic, setNewMusic] = useState({});
  const [idsList] = useState([]);

  const [color, setColor] = useState("");

  const fivePlaylists = playlists?.items?.sort(
    (a, b) => b?.tracks?.total - a?.tracks?.total
  );

  useEffect(() => {
    spotify
      .getNewReleases({ market: "CO", limit: 10 })
      .then((data) => setNewMusic(data.albums));

    spotify
      .getMyRecentlyPlayedTracks({
        limit: 50,
        before: currentHour.getTime(),
      })
      .then((data) => {
        const list = data.items
          .filter((i) => i.context)
          .map((l) => l.context.href.split("/")[5]);

        return [...new Set(list)];
      })
      .then((ids) => {
        ids.map((l) =>
          spotify.getPlaylist(l).then((recentlyPlaylists) => {
            idsList.push({ ...recentlyPlaylists });
            dispatch({
              type: "SET_RECENTLY_PLAYLISTS",
              recentlyPlaylists: idsList,
            });
          })
        );
      });
  }, []);

  const handleChangeColor = (color) => {
    setColor(colorGenerate(color));
  };

  const itemsToDisplay = useBreakpointValue({
    base: 2,
    md: 3,
    lg: 4,
    xl: 5,
    "2xl": 7,
  });

  const currentHour = new Date();
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
            : currentHour.getHours() > 12 && currentHour.getHours() <= 18
            ? "¡Buenas tardes!"
            : "¡Buenas noches!"}
        </Heading>
        
        </Box>
        <PlaylistTable />

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

          {fivePlaylists?.map((list, index) =>
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
      <Box px={{ base: 4, lg: 8 }} w="100%" h="auto" color="white">
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box mb={4}>
            <Heading fontSize="25px">Destacado</Heading>
            <Text mt={2} fontSize="sm" color="#D2CDCC" opacity="0.7">
              Playlists destacadas.
            </Text>
          </Box>
          <Link fontSize="xs" color="#D2CDCC" opacity="0.7" fontWeight="bold">
            VER TODO
          </Link>
        </Flex>

        <SimpleGrid columns={itemsToDisplay} gap={4}>
          {featuredPlaylists?.playlists?.items?.map((i, index) =>
            index < itemsToDisplay ? (
              <GridItem key={i?.id}>
                <CardType2
                  title={i?.name}
                  image={i?.images[0]?.url}
                  description={i?.description}
                  owner={i?.owner?.display_name}
                />
              </GridItem>
            ) : (
              <></>
            )
          )}
        </SimpleGrid>
      </Box>
      <Box px={{ base: 4, lg: 8 }} w="100%" h="auto" color="white">
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box mb={4}>
            <Heading fontSize="25px">Nueva Musica</Heading>
          </Box>
          <Link fontSize="xs" color="#D2CDCC" opacity="0.7" fontWeight="bold">
            VER TODO
          </Link>
        </Flex>

        <SimpleGrid columns={itemsToDisplay} gap={4}>
          {newMusic?.items?.map((i, index) =>
            index < itemsToDisplay ? (
              <GridItem key={i?.id}>
                <CardType2
                  title={i?.name}
                  image={i?.images[0]?.url}
                  description={i?.description}
                  owner={i?.owner?.display_name}
                />
              </GridItem>
            ) : (
              <></>
            )
          )}
        </SimpleGrid>
      </Box>
      <Box px={{ base: 4, lg: 8 }} w="100%" h="auto" color="white">
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box mb={4}>
            <Heading fontSize="25px">Escuchado recientemente</Heading>
          </Box>
          <Link fontSize="xs" color="#D2CDCC" opacity="0.7" fontWeight="bold">
            VER TODO
          </Link>
        </Flex>
        <SimpleGrid columns={itemsToDisplay} gap={4}>
          {recentlyPlaylists?.map((i, index) =>
            index < itemsToDisplay ? (
              <GridItem key={i?.id}>
                <CardType2
                  title={i?.name}
                  image={i?.images[0]?.url}
                  description={i?.description}
                  owner={i?.owner?.display_name}
                />
              </GridItem>
            ) : (
              <></>
            )
          )}
        </SimpleGrid>
      </Box>
    </Stack>
  );
};

export default HomeView;

