import { applyMiddleware, combineReducers, createStore } from "redux"
import { Dishes } from './reducer/dishes'
import { Comments } from './reducer/comments'
import { Leaders } from './reducer/leaders'
import { Promotions } from './reducer/promotions'
import thunk from "redux-thunk"
import logger from "redux-logger"

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions
        }),
        applyMiddleware(thunk, logger)
    ) 

    return store
}