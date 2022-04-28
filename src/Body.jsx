import React from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import Footer from "./Footer/Footer";
import HomeView from "./HomeView/HomeView";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import ListsView from "./LibraryView/ListsView";
import SearchView from "./SearchView/SearchView";
import PodcastsView from "./LibraryView/PodcastsView";
import ArtistsView from "./LibraryView/ArtistsView";
import AlbumsView from "./LibraryView/AlbumsView";
import GenreView from "./GenreView/GenreView";
import PlaylistView from "./PlaylistView/PlaylistView";

const Body = () => {
  return (
    <Box maxWidth="100vw" height="100vh" minH="500px" p={0} overflowY="auto">
      <Sidebar />
      <Topbar />
      <Switch>
        <Redirect from="/" to={"/home"} exact />
        <Redirect from="/library" to={"/library/playlists"} exact />
        <Redirect from="/you_like" to={"/playlist/meSavedTracks"} exact />

        <Route exact path="/home">
          <HomeView />
        </Route>
        <Route exact path="/library/playlists">
          <ListsView />
        </Route>
        <Route exact path="/library/podcasts">
          <PodcastsView />
        </Route>
        <Route exact path="/library/artists">
          <ArtistsView />
        </Route>
        <Route exact path="/library/albums">
          <AlbumsView />
        </Route>
        <Route exact path="/search">
          <SearchView />
        </Route>
        <Route path={"/genre/:id"}>
          <GenreView />
        </Route>
        <Route path={"/playlist/:id"}>
          <PlaylistView />
        </Route>
      </Switch>

      <Footer
        id="2tyMOrVliF1wRnumVdcEwP"
        link="https://p.scdn.co/mp3-preview/16d50011b201dd1cbd0ef3b40d0d5cb238650c5b?cid=5247023442364a818f07a5d4dd06877f"
      />
    </Box>
  );
};

export default Body;

