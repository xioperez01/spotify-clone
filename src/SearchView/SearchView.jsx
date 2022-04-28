import React, { useEffect } from "react";
import { Stack, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import CardType4 from "../Shared/Cards/CardType4";
import { Carousel } from "react-responsive-carousel";
import CardType3 from "../Shared/Cards/CardType3";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { spotify } from "../App";
import { useDataLayerValue } from "../DataLayer";
import { useHistory } from "react-router-dom";

const SearchView = () => {
  const history = useHistory();
  const [{ topCategories, allCategories }, dispatch] = useDataLayerValue();

  const categoriesIds = [
    "0JQ5DAqbMKFxXaXKP7zcDp",
    "pop",
    "rock",
    "0JQ5DAqbMKFGcCCKMatU5w",
  ];

  const topCategoriesColors = ["#B49BC8", "#8D67AB", "#E61E32", "#F037A5"];

  const handlePath = (id) => {
    history.push(`/genre/${id}`);
  };

  useEffect(() => {
    categoriesIds.map((id, index) =>
      spotify.getCategory(id).then((data) => (topCategories[index] = data))
    );

    spotify
      .getCategories({ county: "CO", locale: "es_CO", limit: 50 })
      .then((data) => {
        dispatch({ type: "SET_ALL_CATEGORIES", allCategories: data });
      });
  }, []);

  return !allCategories ? (
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
      <Box px={{ base: 4, lg: 8 }} pt="80px">
        <Heading color="white" fontSize="25px">
          Tus géneros más escuchados
        </Heading>

        <Box maxW="100%" h="222px" mt={4}>
          <Carousel
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            centerMode
          >
            {topCategories?.map((c, index) => (
              <CardType4
                title={c?.name}
                image={c.icons[0]?.url}
                color={topCategoriesColors[index]}
                onOpen={() => handlePath(c?.id)}
              />
            ))}
          </Carousel>
        </Box>
      </Box>

      <Box px={{ base: 4, lg: 8 }}>
        <Heading color="white" fontSize="25px">
          Explorar todo
        </Heading>
        <SimpleGrid
          mt={4}
          columns={{ base: 2, md: 3, lg: 4, xl: 5, "2xl": 7 }}
          spacing={6}
        >
          {allCategories?.categories?.items?.map((c) => (
            <CardType3
              key={c?.id}
              title={c?.name}
              image={c?.icons[0]?.url}
              onOpen={() => handlePath(c?.id)}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Stack>
  );
};

export default SearchView;

