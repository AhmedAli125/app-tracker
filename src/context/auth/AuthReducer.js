import {
    SET_USER_DATA,
    USER_LOG_OUT
} from '../Type';

export default (state, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            };

        case USER_LOG_OUT:
            return{
                ...state,
                user: {},
                isLoggedIn: false
            }

        default:
            return state
    }
}