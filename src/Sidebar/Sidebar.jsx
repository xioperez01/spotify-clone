import React from "react";
import {
  Box,
  List,
  ListItem,
  Divider,
  Avatar,
  Typography,
} from "@mui/material";
import { BiLibrary, BiSearch } from "react-icons/bi";
import { AiFillHome, AiFillPlusSquare } from "react-icons/ai";
import { TiHeart } from "react-icons/ti";
import { Icon } from "@mui/material";

export const Sidebar = () => {
  const sidebarMenu = [
    { title: "Inicio", icon: <AiFillHome /> },
    { title: "Buscar", icon: <BiSearch /> },
    { title: "Tu biblioteca", icon: <BiLibrary /> },
    { title: "Crear lista", icon: <AiFillPlusSquare /> },
    { title: "Canciones que te gustan", icon: <TiHeart size={18} /> },
  ];
  return (
    <Box width="240px" height="100%" bgcolor="#000" px={1} pt={2}>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify logo"
        width="150px"
      />
      <List>
        {sidebarMenu.map((i, index) => (
          <ListItem
            button
            key={i.title}
            sx={{
              px: 1,
              mt: index === 3 ? 2 : 0,
              color: "#A6A6A6",
              ":hover": { color: "white" },
            }}
          >
            {index === 4 ? (
              <Avatar
                alt={i.title}
                variant="square"
                sx={{
                  width: 25,
                  height: 25,
                  background:
                    "linear-gradient(135deg, rgba(51,12,170,1) 0%, rgba(127,149,154,1) 100%)",
                }}
              >
                <Icon children={i.icon} sx={{ color: "#A6A6A6" }} />
              </Avatar>
            ) : (
              <Icon children={i.icon} sx={{ fontSize: "30px" }} />
            )}
            <Typography
              variant="body2"
              fontWeight="bold"
              ml={2.5}
              textOverflow="ellipsis"
              noWrap
            >
              {i.title}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Divider variant="middle" />
    </Box>
  );
};

