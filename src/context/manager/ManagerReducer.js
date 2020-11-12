import {
    PROJECT_CREATE,
    CANCEL_PROJECT
} from '../Type'

export default (state, action) => {
    switch(action.type) {
        case PROJECT_CREATE:
            return {
                ...state,
                projects: false,
                addProjectButton: false,
                showCreateProject: true               
            };
        case CANCEL_PROJECT:
            return {
                ...state,
                projects: true,
                addProjectButton: true,
                showCreateProject: false               
            };
        default:
            return state;
    }
};