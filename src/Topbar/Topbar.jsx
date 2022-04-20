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
import React from "react";
import { useDataLayerValue } from "../DataLayer";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { RiExternalLinkLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
  MdOutlineClose,
} from "react-icons/md";

export const Topbar = ({ view }) => {
  const [{ user }] = useDataLayerValue();

  const [isOpen, setIsOpen] = React.useState(false);
  const [toSearch, setToSearch] = React.useState("");

  const libraryMenu = [
    { title: "Listas" },
    { title: "Potcasts" },
    { title: "Artistas" },
    { title: "Álbumes" },
  ];

  const handleSearch = () => {
    if (document.getElementById("toSearch")) {
      if (document.getElementById("toSearch").value) {
        let trim = document.getElementById("toSearch").value.trim();

        const tmp = new RegExp(trim, "i");
        setToSearch(tmp);
      }
    }
  };

  const handleClearSearch = () => {
    if (document.getElementById("toSearch")) {
      document.getElementById("toSearch").value = "";
      setToSearch("");
    }
  };

  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      w="calc(100% - 240px)"
      h="60px"
      bgColor="#121212"
      position="fixed"
      top={0}
      right={0}
      px={8}
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
          />
          <IconButton
            size="sm"
            rounded="full"
            bgColor="#190404"
            _focus={{ border: "none" }}
            _hover={{ bgColor: "#190404" }}
            _active={{ bgColor: "#190404" }}
            icon={<MdOutlineArrowForwardIos size={20} />}
          />
        </ButtonGroup>
        {view === "SEARCH" ? (
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
              onChange={handleSearch}
              autoComplete="off"
            />
            {toSearch !== "" ? (
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
        ) : view === "LIBRARY" ? (
          <ButtonGroup color="white">
            {libraryMenu.map((i, index) => (
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
          <MenuItem _hover={{ bgColor: "#3e3e3e" }}>Cerrar Sesión</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

