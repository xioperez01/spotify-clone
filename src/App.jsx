import React from "react";
import { Login } from "./Login/Login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import Body from "./Body";
import { BrowserRouter } from "react-router-dom";
import { DataLayer } from "./DataLayer";
import reducer, { initialState } from "./reducer";

export const spotify = new SpotifyWebApi();

const RequireLoggedInUser = ({ children }) => {
  const [{ token }, dispatch] = useDataLayerValue();

  React.useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const tmpToken = hash.access_token;

    if (tmpToken) {
      dispatch({
        type: "SET_TOKEN",
        token: tmpToken,
      });

      spotify.setAccessToken(tmpToken);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playLists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playLists,
        });
      });

      spotify
        .getFeaturedPlaylists({ market: "CO", limit: 7 })
        .then((featuredPlaylists) => {
          dispatch({
            type: "SET_FEATUREDPLAYLISTS",
            featuredPlaylists: featuredPlaylists,
          });
        });
      spotify.getMySavedTracks().then((data) => {
        dispatch({ type: "SAVED_TRACKS", savedTracks: data });
      });

      spotify.getMySavedShows().then((data) => {
        dispatch({ type: "SAVED_SHOWS", savedShows: data });
      });
    }
  });

  return !token ? <Login /> : children;
};

function App() {
  return (
    <BrowserRouter>
      <DataLayer initialState={initialState} reducer={reducer}>
        <RequireLoggedInUser>
          <Body />
        </RequireLoggedInUser>
      </DataLayer>
    </BrowserRouter>
  );
}

export default App;

