import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Avatar,
  Icon,
  ButtonGroup,
  IconButton,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDataLayerValue } from "../DataLayer";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { RiExternalLinkLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
  MdOutlineClose,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { debounce } from "lodash";

const Topbar = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { goBack, goForward } = useHistory();

  const [{ user }, dispatch] = useDataLayerValue();

  const [isOpen, setIsOpen] = React.useState(false);
  const [newSearch, setNewSearch] = React.useState("");
  const [tmp, setTmp] = React.useState("");

  const currentSearch = pathname.split("/")[2];

  const libraryMenu = [
    { title: "Listas", label: "/library/playlists" },
    { title: "Potcasts", label: "/library/podcasts" },
    { title: "Artistas", label: "/library/artists" },
    { title: "Álbumes", label: "/library/albums" },
  ];

  const logOut = () => {
    dispatch({
      type: "SET_TOKEN",
      token: null,
    });
  };

  const handlePath = (newSearch) => {
    history.push(`/search/${newSearch}`);
  };

  const handleSearch = () => {
    if (document.getElementById("toSearch")) {
      if (document.getElementById("toSearch").value) {
        let trim = document.getElementById("toSearch").value.trim();
        setNewSearch(trim);
        handlePath(trim);
      }
    }
  };

  const handleClearSearch = () => {
    if (document.getElementById("toSearch")) {
      document.getElementById("toSearch").value = "";
      setNewSearch("");
      setTmp("");
      history.push("/search/");
    }
  };

  const debouncedChangeHandler = useCallback(debounce(handleSearch, 500), []);

  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      w="calc(100% - 240px)"
      h="60px"
      bgColor="transparent"
      position="absolute"
      top={0}
      right={0}
      px={8}
      zIndex="1"
    >
      <HStack spacing={5}>
        <ButtonGroup color="white" spacing={5}>
          <IconButton
            size="sm"
            rounded="full"
            bgColor="#190404"
            _focus={{ border: "none" }}
            _hover={{ bgColor: "#190404" }}
            _active={{ bgColor: "#190404" }}
            icon={<MdOutlineArrowBackIos size={20} />}
            onClick={goBack}
          />
          <IconButton
            size="sm"
            rounded="full"
            bgColor="#190404"
            _focus={{ border: "none" }}
            _hover={{ bgColor: "#190404" }}
            _active={{ bgColor: "#190404" }}
            icon={<MdOutlineArrowForwardIos size={20} />}
            onClick={goForward}
          />
        </ButtonGroup>
        {pathname.includes("/search") ? (
          <InputGroup w="360px">
            <InputLeftElement
              pointerEvents="none"
              children={<FiSearch color="#190404" size={25} />}
            />
            <Input
              id="toSearch"
              color="#190404"
              fontSize="14px"
              bgColor="white"
              placeholder="Artistas, canciones o pódcasts"
              size="md"
              rounded="full"
              _focus={{ border: "none" }}
              _placeholder={{ color: "#757575", fontSize: "14px" }}
              value={
                currentSearch && currentSearch.length !== 0
                  ? currentSearch
                  : tmp
              }
              onChange={(e) => {
                setTmp(e.target.value);
                debouncedChangeHandler(e);
              }}
              autoComplete="off"
            />
            {newSearch !== "" ? (
              <InputRightElement
                children={
                  <MdOutlineClose
                    color="#190404"
                    size={30}
                    onClick={handleClearSearch}
                  />
                }
              />
            ) : (
              <></>
            )}
          </InputGroup>
        ) : pathname.includes("/library") ? (
          <ButtonGroup color="white">
            {libraryMenu.map((i) => (
              <Link to={i.label}>
                <Button
                  key={i.title}
                  bgColor="transparent"
                  fontSize="sm"
                  fontWeight="bold"
                  _focus={{ border: "none", bgColor: "#3e3e3e" }}
                  _active={{ bgColor: "#3e3e3e" }}
                  _hover={{}}
                >
                  {i.title}
                </Button>
              </Link>
            ))}
          </ButtonGroup>
        ) : (
          <></>
        )}
      </HStack>

      <Menu onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)}>
        <MenuButton
          as={Button}
          rightIcon={
            !isOpen ? (
              <RiArrowDownSFill size={22} />
            ) : (
              <RiArrowUpSFill size={22} />
            )
          }
          rounded="full"
          _focus={{ border: "none" }}
          _hover={{ bgColor: "#190404" }}
          _expanded={{ bgColor: "#190404" }}
          _active={{ bgColor: "#190404" }}
          alignItems="center"
          pl={0.5}
          pr={2}
          h="auto"
          py={0.5}
          color="white"
          bgColor="#190404"
        >
          <Flex dir="row" alignItems="center">
            <Avatar
              height="25px"
              w="25px"
              name={user?.display_name}
              src={user?.images[0].url}
            />
            <Text ml={3} fontSize="sm">
              {user?.display_name}
            </Text>
          </Flex>
        </MenuButton>
        <MenuList
          bgColor="#190404"
          color="white"
          border="none"
          fontSize="sm"
          p={1}
        >
          <MenuItem
            _hover={{ bgColor: "#3e3e3e" }}
            _focus={{ bgColor: "#190404" }}
          >
            <Flex
              w="100%"
              dir="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>Cuenta</Text>
              <Icon as={RiExternalLinkLine} justifySelf="end" boxSize={5} />
            </Flex>
          </MenuItem>
          <MenuItem _hover={{ bgColor: "#3e3e3e" }}>Perfil</MenuItem>
          <MenuItem _hover={{ bgColor: "#3e3e3e" }} onClick={logOut}>
            Cerrar Sesión
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Topbar;

