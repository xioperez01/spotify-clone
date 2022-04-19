import React from "react";
import {
  Box,
  Button,
  HStack,
  Img,
  Divider,
  Icon,
  Text,
  Flex,
  Square,
  Stack,
} from "@chakra-ui/react";
import { BiLibrary, BiSearch } from "react-icons/bi";
import { AiFillHome, AiFillPlusSquare } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useDataLayerValue } from "../DataLayer";

export const Sidebar = () => {
  const [{ playlists }] = useDataLayerValue();

  const sidebarMenu = [
    { title: "Inicio", icon: AiFillHome },
    { title: "Buscar", icon: BiSearch },
    { title: "Tu biblioteca", icon: BiLibrary },
    { title: "Crear lista", icon: AiFillPlusSquare },
    { title: "Canciones que te gustan", icon: BsFillSuitHeartFill },
  ];
  return (
    <Box width="240px" height="100%" bgColor="black" px={5} py={4}>
      <Img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify logo"
        width="150px"
        mb={5}
        ml={-2}
      />
      <Flex direction="column">
        {sidebarMenu.map((i, index) => {
          return (
            <Button
              variant="ghost-on-accent"
              key={i.title}
              justifyContent="start"
              color="#A6A6A6"
              _hover={{ color: "white" }}
              colorScheme="whiteAlpha"
              _focus={{ border: "none" }}
              p={0}
              mt={index === 3 ? 7 : 1}
              transitionDuration="0.5s"
            >
              <HStack spacing={4} alignItems="center">
                {index === 4 ? (
                  <Square
                    bg="linear-gradient(135deg, rgba(51,12,170,1) 0%, rgba(127,149,154,1) 100%)"
                    size="24px"
                  >
                    <Icon as={i.icon} boxSize={3} color="on-accent-subtle" />
                  </Square>
                ) : (
                  <Icon
                    as={i.icon}
                    boxSize={index < 3 ? 6 : 7}
                    color="on-accent-subtle"
                  />
                )}
                <Text
                  fontSize="14px"
                  fontWeight="bold"
                  maxW="155px"
                  isTruncated
                >
                  {i.title}
                </Text>
              </HStack>
            </Button>
          );
        })}
      </Flex>

      <Divider orientation="horizontal" my={3} border="0px solid #282828" />

      <Stack spacing={2}>
        {playlists?.items?.map((l) => (
          <Button
            variant="ghost-on-accent"
            key={l.name}
            justifyContent="start"
            color="#A6A6A6"
            _hover={{ color: "white" }}
            colorScheme="whiteAlpha"
            _focus={{ border: "none" }}
            p={0}
            transitionDuration="0.5s"
            size="xs"
          >
            <Text fontSize="14px" maxW="155px" isTruncated>
              {l.name}
            </Text>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

