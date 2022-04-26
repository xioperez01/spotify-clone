export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  featuredPlaylists: null,
  recentlyPlaylists: [],
  topCategories: [],
  allCategories: null,
  savedTracks: null,
  savedShows: null,
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
    case "SET_ALL_CATEGORIES":
      return {
        ...state,
        allCategories: action.allCategories,
      };
    case "SET_TOP_CATEGORIES":
      return {
        ...state,
        topCategories: action.topCategories,
      };
    case "SAVED_TRACKS":
      return {
        ...state,
        savedTracks: action.savedTracks,
      };
    case "SAVED_SHOWS":
      return {
        ...state,
        savedShows: action.savedShows,
      };
    default:
      return state;
  }
};

export default reducer;

