import {
    GET_PROJECTS
} from '../Type'

export default (state, action) => {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        default:
            return state;
        
    }
}