import axios from "axios";
export const FETCH_EPISODES = "FETCH_EPISODES";
export const FETCH_MOVIE = "FETCH_MOVIE";
export const FETCH_EPISODE = "FETCH_EPISODE";

const baseURL = "https://api.tvmaze.com";

export const fetchMovie = id => async dispatch => {
  const response = await axios.get(`${baseURL}/shows/${id}`);
  dispatch({ type: FETCH_MOVIE, movie: response.data });
};
export const fetchEpisode = id => async dispatch => {
  const response = await axios.get(`${baseURL}/episodes/${id}`);
  dispatch({ type: FETCH_EPISODE, episode: response.data });
};
export const fetchEpisodes = id => async dispatch => {
  const response = await axios.get(`${baseURL}/shows/${id}/episodes`);
  //pick six latest episodes and sort them in a descending order
  const latestEpisodes = response.data.slice(-6);
  const sortEpisodes = latestEpisodes.sort((a, b) => b.number - a.number);
  dispatch({
    type: FETCH_EPISODES,
    episodes: sortEpisodes
  });
};
