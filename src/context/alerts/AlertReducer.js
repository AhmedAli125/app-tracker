import {
    ALERT
} from '../Type'

export default (state, action) => {
    switch (action.type) {
        case ALERT:
            return {
                ...state,
                alertMessage: action.payload.msg,
                type: action.payload.type
            }
        default:
            return state
    }
}