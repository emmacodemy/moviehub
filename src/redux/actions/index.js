import axios from 'axios';

const API_KEY = `1a0cb313ebb158682c24ac7abe169c88`;


// Movies Redux Actions
export const fetchTrendingMovies = () => async (dispatch) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
        
        return dispatch({
            type: 'FETCH_TRENDING_MOVIES',
            payload: response.data
        })
    }catch(err){
        dispatch({
            type: 'FETCH_TRENDING_MOVIES',
            payload: 'error'
        })
    }
}

export const fetchByMoviesGenre = (genreId) => async (dispatch) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`)
        
        return dispatch({
            type: 'FETCH_MOVIES_BY_GENRE',
            payload: response.data
        })
    }catch(err){
        dispatch({
            type: 'FETCH_MOVIES_BY_GENRE',
            payload: 'error'
        })
    }
}

export const fetchByMoviesSearch = (term) => async (dispatch) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${term}&page=1&include_adult=true`)
        
        return dispatch({
            type: 'FETCH_MOVIES_BY_SEARCH',
            payload: response.data
        })
    }catch(err){
        dispatch({
            type: 'FETCH_MOVIES_BY_SEARCH',
            payload: 'error'
        })
    }
}



// Series Redux Actions
export const fetchTrendingSeries = () => async (dispatch) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`)

        return dispatch({
            type: 'FETCH_TRENDING_SERIES',
            payload: response.data
        })
    } catch (err) {
        dispatch({
            type: 'FETCH_TRENDING_SERIES',
            payload: 'error'
        })
    }
}

export const fetchBySeriesType = (type) => async (dispatch) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${type}?api_key=${API_KEY}&language=en-US`)

        return dispatch({
            type: 'FETCH_SERIES_BY_GENRE',
            payload: response.data
        })
    } catch (err) {
        dispatch({
            type: 'FETCH_SERIES_BY_GENRE',
            payload: 'error'
        })
    }
}

