import React from "react";
import { Login } from "./Login/Login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import { Body } from "./Body";

const spotify = new SpotifyWebApi();

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
    }
  });

  return <div>{token ? <Body /> : <Login />}</div>;
}

export default App;

