import * as ActionTypes from '../action/ActionTypes'

export const Feedback = (state = {feedbacks: []},action) => {

    switch(action.type) {
        case ActionTypes.ADD_FEEDBACK:
            let feedback = action.payload
            return {...state,feedbacks: state.feedbacks.concat(feedback)}

        default:
            return state
    }
}