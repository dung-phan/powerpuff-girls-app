import { FETCH_EPISODES, FETCH_MOVIE, FETCH_EPISODE } from "../actions";

const initialState = {
  episodes: [],
  movie: {},
  episode: {}
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_EPISODES:
      return Object.assign({}, state, {
        episodes: action.episodes
      });
    case FETCH_MOVIE:
      return Object.assign({}, state, {
        movie: action.movie
      });
    case FETCH_EPISODE:
      return Object.assign({}, state, {
        episode: action.episode
      });
    default:
      return state;
  }
};
