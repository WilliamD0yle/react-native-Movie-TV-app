import axios from 'axios';
import { TV_FETCH, DETAILS_FETCH, SEASON_FETCH, EPISODE_DETAILS_FETCH,
  CLEAR_TV_STATE, CLEAR_EPISODE_STATE, SEARCH_TV_FETCH } from './types';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = "&api_key=cf73a59652c9a9806c06af8a6295e3a3";
const TV_URL = "https://api.themoviedb.org/3/tv/";

const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=';
const YOUTUBE_KEY = 'trailer&type=video&key=AIzaSyDOD4l6AUGz6e2Yb2645GgVeK3OiTKfkLc';

export const tvshowsFetch = (choice, page) => {
  return (dispatch) => {
    return axios.get(`${API_URL}discover/tv?${choice}&page=${page}${API_KEY}`).then((response) => {
      dispatch({ type: TV_FETCH, payload: response.data.results });
    }).catch((error) => {
      console.log(error);
    });
  };
};

export const showDetails = (tvID) => {
  return (dispatch) => {
    return axios.get(`${TV_URL}${tvID}?${API_KEY}`).then((response) => {
      dispatch({ type: DETAILS_FETCH, payload: response.data });
    }).catch((error) => {
      console.log(error);
    });
  };
};

export const seasonDetails = (tvID, seasons) => {
  return (dispatch) => {
    return axios.get(`${TV_URL}${tvID}/season/${seasons}?${API_KEY}`).then((response) => {
      dispatch({ type: EPISODE_DETAILS_FETCH, payload: response.data.episodes });
    }).catch((error) => {
      // console.log(error);
    });
  };
};

export const clearTVState = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_TV_STATE });
  };
};

export const clearEpisodeState = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_EPISODE_STATE });
  };
};
