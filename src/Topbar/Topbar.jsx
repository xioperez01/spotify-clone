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
} from "@chakra-ui/react";
import React from "react";
import { useDataLayerValue } from "../DataLayer";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { RiExternalLinkLine } from "react-icons/ri";

export const Topbar = () => {
  const [{ user }] = useDataLayerValue();

  const [isOpen, setIsOpen] = React.useState(false);

  console.log(user);
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      w="calc(100% - 240px)"
      h="60px"
      bgColor="#C72424"
      position="fixed"
      top={0}
      right={0}
      px={4}
    >
      <Text>Hola</Text>
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

