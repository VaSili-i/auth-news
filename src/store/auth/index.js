
const defaultState = {
    user: {
        name: null,
        password: null
    },
    isAuth: false,
    error: null
}
export const FETCH_USER = 'FETCH_USER';
export const IS_AUTH = 'IS_AUTH';
export const ERROR_AUTH = 'ERROR_AUTH';

export const authReducer = function (state = defaultState, action) {
    switch (action.type) {
        case FETCH_USER:
            return { ...state, user: action.payload, error: null }
        case IS_AUTH:
            return { ...state, isAuth: action.payload }
        case ERROR_AUTH:
            return { ...state, error: action.payload }
        default:
            return state
    }
}