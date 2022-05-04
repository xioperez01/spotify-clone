import { spotify } from "../../App";

export const playPlaylist = (id, dispatch) => {
  spotify.play({ context_uri: `spotify:playlist:${id}` }).then((data) => {
    dispatch({
      type: "SET_PLAYING_PLAYLIST",
      currentPlayingPlaylist: data,
    });

    spotify.getMyCurrentPlayingTrack().then((playingTrack) => {
      dispatch({
        type: "SET_CURRENT_PLAYING",
        currentPlayingTrack: playingTrack,
      });
      dispatch({
        type: "SET_PLAYING",
        isPlaying: true,
      });
    });
  });
};

export const playTrack = (id, dispatch) => {
  if (id !== "") {
    spotify.play({ uris: [`spotify:track:${id}`] }).then((res) => {
      spotify.getMyCurrentPlayingTrack().then((track) => {
        dispatch({
          type: "SET_CURRENT_PLAYING",
          currentPlayingTrack: track,
        });
        dispatch({
          type: "SET_PLAYING",
          isPlaying: true,
        });
      });
    });
  } else {
    spotify.play().then(() => {
      spotify.getMyCurrentPlayingTrack().then((track) => {
        dispatch({
          type: "SET_CURRENT_PLAYING",
          currentPlayingTrack: track,
        });
        dispatch({
          type: "SET_PLAYING",
          isPlaying: true,
        });
      });
    });
  }
};

export const pauseTrack = (dispatch) => {
  spotify.pause().then(() => {
    spotify.getMyCurrentPlayingTrack().then((track) => {
      dispatch({
        type: "SET_CURRENT_PLAYING",
        currentPlayingTrack: track,
      });
      dispatch({
        type: "SET_PLAYING",
        isPlaying: false,
      });
    });
  });
};

export const nexTrack = (dispatch) => {
  spotify.skipToNext().then(() => {
    spotify.getMyCurrentPlayingTrack().then((track) => {
      dispatch({
        type: "SET_CURRENT_PLAYING",
        currentPlayingTrack: track,
      });
      dispatch({
        type: "SET_PLAYING",
        isPlaying: true,
      });
    });
  });
};

export const prevTrack = (dispatch) => {
  spotify.skipToPrevious().then(() => {
    spotify.getMyCurrentPlayingTrack().then((track) => {
      dispatch({
        type: "SET_CURRENT_PLAYING",
        currentPlayingTrack: track,
      });
      dispatch({
        type: "SET_PLAYING",
        isPlaying: true,
      });
    });
  });
};

