export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  featuredPlaylists: null,
  recentlyPlaylists: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_FEATUREDPLAYLISTS":
      return {
        ...state,
        featuredPlaylists: action.featuredPlaylists,
      };
    case "SET_RECENTLY_PLAYLISTS":
      return {
        ...state,
        recentlyPlaylists: [...new Set(action.recentlyPlaylists)],
      };
    default:
      return state;
  }
};

export default reducer;

