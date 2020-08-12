

export const moviesReducer = (state = null , action) => {
    switch (action.type) {
        case 'FETCH_TRENDING_MOVIES':
            return action.payload
        case 'FETCH_MOVIES_BY_GENRE':
            return action.payload
        case 'FETCH_MOVIES_BY_SEARCH':
            return action.payload
        default:
            return state;
    }
}

export const seriesReducer = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_TRENDING_SERIES':
            return action.payload
        case 'FETCH_SERIES_BY_GENRE':
            return action.payload
        default:
            return state;
    }
}
