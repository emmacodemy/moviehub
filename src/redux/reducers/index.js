import { combineReducers } from 'redux';
import { moviesReducer, seriesReducer } from './reducers'

export default combineReducers({
    movies: moviesReducer,
    series: seriesReducer
});