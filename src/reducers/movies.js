import { FETCH_EPISODES, FETCH_MOVIE } from "../actions";

export default (state = [], action = {}) => {
  console.log("what is action", action);
  switch (action.type) {
    case FETCH_EPISODES:
      return [...state, action.episodes];
    case FETCH_MOVIE:
      return [...state, action.movie];
    default:
      return state;
  }
};
