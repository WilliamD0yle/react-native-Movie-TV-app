import axios from 'axios';
import { MOVIES_FETCH, TRAILER_FETCH, DETAILS_FETCH, CLEAR_STATE, SEARCH_FETCH, CLEAR_TV_STATE, CLEAR_SEARCH_STATE } from './types';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = "&api_key=cf73a59652c9a9806c06af8a6295e3a3";
const MOVIE_URL = "https://api.themoviedb.org/3/movie/";

const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=';
const YOUTUBE_KEY = 'trailer&type=video&key=AIzaSyDOD4l6AUGz6e2Yb2645GgVeK3OiTKfkLc';

export const moviesFetch = (choice, page) => {
  return (dispatch) => {
    return axios.get(`${API_URL}discover/movie?${choice}&page=${page}${API_KEY}`).then((response) => {
      dispatch({ type: MOVIES_FETCH, payload: response.data.results });
    }).catch((error) => {
      console.log(error);
    });
  };
};

export const moviesDetails = (movieID) => {
  return (dispatch) => {
    return axios.get(`${MOVIE_URL}${movieID}?${API_KEY}`).then((response) => {
      dispatch({ type: DETAILS_FETCH, payload: response.data });
    }).catch((error) => {
      console.log(error);
    });
  };
};

export const trailerFetch = (movie) => {
  return (dispatch) => {
    return axios.get(YOUTUBE_API + movie + YOUTUBE_KEY).then((response) => {
      dispatch({ type: TRAILER_FETCH, payload: response.data.items[0].id.videoId });
    }).catch((error) => {
      console.log(error);
    });
  };
};

export const searchAll = (searchData) => {
  return (dispatch) => {
    return axios.get(`${API_URL}search/multi?${API_KEY}&query=${searchData}`).then((response) => {
      dispatch({ type: SEARCH_FETCH, payload: response.data.results });
    }).catch((error) => {
      console.log(error);
    });
  };
};

export const clearState = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_STATE, payload: '' });
  };
};

export const clearAllState = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_STATE, payload: '' });
    dispatch({ type: CLEAR_TV_STATE, payload: '' });
    dispatch({ type: CLEAR_SEARCH_STATE, payload: '' });
  };
};
