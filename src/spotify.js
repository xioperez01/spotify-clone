export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = "https://xioperez01.github.io/spotify-clone/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-library-read",
  "user-read-private",
  "user-follow-read",
  "playlist-read-collaborative",
  "playlist-read-private",
  "app-remote-control",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

