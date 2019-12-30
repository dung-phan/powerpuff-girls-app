import * as request from "superagent";
import _ from "lodash";
export const FETCH_EPISODES = "FETCH_EPISODES";
export const FETCH_MOVIE = "FETCH_MOVIE";

const baseURL = "http://api.tvmaze.com";

export const fetchMovie = id => async dispatch => {
  const response = await request(`${baseURL}/shows/${id}`);
  dispatch({ type: FETCH_MOVIE, movie: response.body });
};
export const fetchEpisodes = id => async dispatch => {
  const response = await request(`${baseURL}/shows/${id}/episodes`);
  const latestEpisodes = _.takeRight(response.body, 6);
  const sortEpisodes = _.orderBy(latestEpisodes, ["number"], ["desc"]);
  dispatch({
    type: FETCH_EPISODES,
    episodes: sortEpisodes
  });
};
