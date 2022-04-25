import React from 'react';
import { Box, Grid, Heading } from '@chakra-ui/react';
import { useDataLayerValue } from '../DataLayer';
import CardType1 from '../Shared/Cards/CardType1';
import CardType3 from '../Shared/Cards/CardType3';

const HomeView = () => {
  const [{ playlists }] = useDataLayerValue();
  console.log(playlists);

  const currentHour = new Date().getHours();
  console.log(currentHour);
  const item = {
    title: 'Podcasts',
    images: {
      url: 'https://media.istockphoto.com/photos/young-handsome-african-man-wearing-headphones-listening-to-music-and-picture-id1320722438?b=1&k=20&m=1320722438&s=170667a&w=0&h=7bJUiK2c6k3GaWIeUOjaJw0B090nxqlGYU_vhK300WY=',
    },
    color: "#5EC36B"
  };
  return (
    <Box
      w="calc(100% - 240px)"
      bgColor="#1D1D1D"
      position="absolute"
      top={0}
      right={0}
      h="calc(100% -  90px)"
      overflowY="auto"
      as="section"
      pt="80px"
      px={8}
    >
      <Heading color="white" fontSize="32px">
        {currentHour <= 12 ? '¡Buenos dias!' : ''}
      </Heading>
      <CardType3 item={item} />
    </Box>
  );
};

export default HomeView;
