import {
    SET_USER_DATA
} from '../Type';

export default (state, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            // console.log(`action.payload`);
            // console.log(action.payload);
            return {
                ...state,
                user: { ...action.payload },
                isLoggedIn: true
            }

        default:
            return state
    }
}