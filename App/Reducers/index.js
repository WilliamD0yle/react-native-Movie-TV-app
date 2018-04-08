import { combineReducers } from 'redux';
import MovieReducer from './MovieReducer';
import TVReducer from './TVReducer';
import DetailsReducer from './DetailsReducer';
import EpisodeDetailsReducer from './EpisodeDetailsReducer';
import TrailerReducer from './TrailerReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
    movies: MovieReducer,
    tv: TVReducer,
    details: DetailsReducer,
    episodes: EpisodeDetailsReducer,
    trailer: TrailerReducer,
    search: SearchReducer,
});
