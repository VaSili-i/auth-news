
const defaultState = {
    news: [
        {
            title: '',
            body: '',
            date: ''
        }
    ]
}

export const FETCH_NEWS = 'FETCH_NEWS';

export const newsReducer = function (state = defaultState, action) {
    switch (action.type) {
        case FETCH_NEWS:
            return { ...state, news: action.payload }
        default:
            return state
    }
}

