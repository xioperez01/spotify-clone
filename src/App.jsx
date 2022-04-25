import React from "react";
import { Login } from "./Login/Login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import Body from "./Body";

export const spotify = new SpotifyWebApi();

function App() {
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
    }
  });

  return <div>{token ? <Body /> : <Login />}</div>;
}

export default App;

