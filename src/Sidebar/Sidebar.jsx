import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
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
    <Box width="240px" height="100%" bgcolor="#000">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify logo" width="150px"
      />
      <List>
        {sidebarMenu.map((i, index) => (
          <ListItem button key={i.title} sx={{ px: 2 }}>
            {index > 3 ? (
              <ListItemAvatar>
                <Avatar
                  alt={i.title}
                  variant="square"
                  sx={{ width: 24, height: 24, bgcolor: "white" }}
                  color="secondary"
                >
                  <Icon color="primary" children={i.icon} />
                </Avatar>
              </ListItemAvatar>
            ) : (
              <ListItemIcon color="secondary">
                <Icon color="secondary" children={i.icon} />
              </ListItemIcon>
            )}
            <ListItemText sx={{ color: "white" }} primary={i.title} />
          </ListItem>
        ))}
      </List>
      <Divider variant="middle" />
    </Box>
  );
};

