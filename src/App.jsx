import React from 'react';
import { Login } from './Login/Login';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';
import { Body } from './Body';
import Footer from './Footer/Footer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token, user }, dispatch] = useDataLayerValue();

  React.useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = '';
    const tmpToken = hash.access_token;

    if (tmpToken) {
      dispatch({
        type: 'SET_TOKEN',
        token: tmpToken,
      });

      spotify.setAccessToken(tmpToken);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists(user?.id).then((playLists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playLists,
        });
      });
    }
  });

  return (
    <div>
      {token ? (
        <Footer
          id="2tyMOrVliF1wRnumVdcEwP"
          link="https://p.scdn.co/mp3-preview/16d50011b201dd1cbd0ef3b40d0d5cb238650c5b?cid=5247023442364a818f07a5d4dd06877f"
        />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
