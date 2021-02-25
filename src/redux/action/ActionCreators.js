import { DISHES } from '../../shared/dishes'
import * as ActionTypes from './ActionTypes'


console.log('action creators')

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
})

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
})

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})

//thunk
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading())
    
    setTimeout(() => {
        dispatch(addDishes(DISHES))
    },2000)
}