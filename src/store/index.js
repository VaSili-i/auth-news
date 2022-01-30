import { applyMiddleware, combineReducers } from 'redux'
import { authReducer } from './auth/index'
import { createStore } from 'redux'
import thunk from 'redux-thunk'
import { newsReducer } from './news'

const rootReducer = combineReducers({
    users: authReducer,
    news: newsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))