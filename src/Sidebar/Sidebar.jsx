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
import { BiLibrary } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { AiFillHome, AiFillPlusSquare } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useDataLayerValue } from "../DataLayer";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();
  const [{ playlists }] = useDataLayerValue();
  const { pathname } = useLocation();

  const sidebarMenu = [
    { title: "Inicio", label: "/home", icon: AiFillHome },
    { title: "Buscar", label: "/search", icon: FiSearch },
    { title: "Tu biblioteca", label: "/library", icon: BiLibrary },
    { title: "Crear lista", label: "new_list", icon: AiFillPlusSquare },
    {
      title: "Canciones que te gustan",
      label: "/you_like",
      icon: BsFillSuitHeartFill,
    },
  ];

  const handlePath = (id) => {
    history.push(`/playlist/${id}`);
  };
  return (
    <Box
      width="240px"
      height="calc(100% - 90px)"
      minH="500px"
      bgColor="black"
      px={0}
      py={4}
    >
      <Flex direction="column" px={5} h="auto">
        <Link to="/home">
          <Img
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt="Spotify logo"
            width="150px"
            mb={1}
            ml={-2}
          />
        </Link>

        <Flex direction="column">
          {sidebarMenu.map((i, index) => {
            return (
              <Link to={i.label}>
                <Button
                  variant="ghost-on-accent"
                  key={i.title}
                  justifyContent="start"
                  color={pathname === i.label ? "white" : "#A6A6A6"}
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
                        <Icon
                          as={i.icon}
                          boxSize={3}
                          color="on-accent-subtle"
                        />
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
              </Link>
            );
          })}
        </Flex>
      </Flex>
      <Box px={5}>
        <Divider
          orientation="horizontal"
          mt={3}
          mb={2}
          border="0px solid #4d4d4d"
        />
      </Box>

      <Stack
        spacing={2}
        overflowY="auto"
        maxH="calc(100% - (24px  + 311.27px))"
        px={5}
        pt={1}
      >
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
            onClick={() => handlePath(l?.id)}
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

export default Sidebar;

