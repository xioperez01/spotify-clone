import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Tag,
  Text,
  Wrap,
  Square,
  Icon,
} from "@chakra-ui/react";
import { spotify } from "../App";
import { useLocation } from "react-router-dom";
import PlaylistTable from "../PlaylistTable/PlaylistTable";
import { useDataLayerValue } from "../DataLayer";
import { BsFillSuitHeartFill } from "react-icons/bs";

const PlaylistView = () => {
  const { pathname } = useLocation();

  const [{ user, savedTracks }] = useDataLayerValue();

  const [playList, setPlayList] = useState();
  const [tracks, setTracks] = useState([]);

  const id = pathname.split("/")[2];
  const isMeLike = id === "meSavedTracks";

  const color = `rgba(${[
    Math.round(Math.random() * 160),
    Math.round(Math.random() * 160),
    Math.round(Math.random() * 160),
  ].join(",")},1)`;

  useEffect(() => {
    if (!isMeLike) {
      spotify.getPlaylist(id).then((data) => setPlayList(data));
      spotify.getPlaylistTracks(id).then((data) => setTracks(data));
    }
  }, [id]);

  return !playList && !isMeLike ? (
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
    ></Box>
  ) : (
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
        h="42vh"
        w="100%"
        px={{ base: 4, lg: 8 }}
        pb={8}
        bg={isMeLike ? "#513B9D" : color}
        color="white"
      >
        <Flex dir="row" alignItems="end">
          <Box boxSize={{ base: "180px", md: "225px" }} mr={6} shadow="dark-lg">
            {isMeLike ? (
              <Square
                w="100%"
                h="100%"
                bg="linear-gradient(135deg, rgba(65,1,244,1) -50%, rgba(99,63,236,1) 35%, rgba(187,227,216,1) 100%)"
                roundedLeft="md"
              >
                <Icon
                  as={BsFillSuitHeartFill}
                  boxSize="40%"
                  color="on-accent-subtle"
                />
              </Square>
            ) : (
              <Image src={playList?.images[0]?.url} />
            )}
          </Box>

          <Flex direction="column" alignItems="start" justifyContent="end">
            <Tag
              variant="solid"
              size="sm"
              bgColor="transparent"
              fontWeight="bold"
            >
              LISTA
            </Tag>
            <Heading
              fontSize={isMeLike ? "max(5vw, 50px)" : "max(6vw, 50px)"}
              mb={2}
              mt={0}
              color="white"
            >
              {isMeLike ? "Canciones que te gustan" : playList?.name}
            </Heading>
            <Text>
              {isMeLike
                ? ""
                : playList?.description[0] === "<"
                ? ""
                : playList?.description}
            </Text>
            <Wrap align="center" fontSize="sm" fontWeight="semibold">
              <Text fontWeight="bold">
                {isMeLike ? user?.display_name : playList?.owner?.display_name}
              </Text>
              <Box rounded="full" bgColor="white" h="1" w="1" />
              <Text>{`${new Intl.NumberFormat("de-DE").format(
                isMeLike ? savedTracks?.total : playList.followers.total
              )} "me gusta"`}</Text>
              <Box rounded="full" bgColor="white" h="1" w="1" />
              <Text>{`${new Intl.NumberFormat("de-DE").format(
                isMeLike ? savedTracks?.total : playList?.tracks?.total
              )} canciones`}</Text>
              <Box rounded="full" bgColor="white" h="1" w="1" />
              <Text>{`${(
                (isMeLike
                  ? savedTracks?.total * 3.5
                  : playList?.tracks?.total * 3.5) / 60
              ).toFixed(0)} hr aproximadamente`}</Text>
            </Wrap>
          </Flex>
        </Flex>
      </Flex>
      <Box
        bg={
          isMeLike
            ? `linear-gradient(180deg, rgba(81,59,157,1) -1%, rgba(29,29,29,1) 3%, rgba(29,29,29,1) 5%);`
            : `linear-gradient(180deg, ${color} -1%, rgba(29,29,29,1) 3%, rgba(29,29,29,1) 5%);`
        }
      >
        <PlaylistTable
          isOwn={user?.display_name === playList?.owner?.display_name}
          items={isMeLike ? savedTracks?.items : tracks?.items}
        />
      </Box>
    </Box>
  );
};

export default PlaylistView;

