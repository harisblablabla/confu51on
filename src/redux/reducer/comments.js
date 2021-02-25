import { COMMENTS } from '../../shared/comments';
import * as ActionTypes from '../action/ActionTypes'

export const Comments = (state = COMMENTS,action) => {
    console.log(action)
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            let comment = action.payload
            comment.id = state.length
            comment.date = new Date().toISOString();
            console.log(comment)
            return state.concat(comment)

        default:
            return state
    }
}