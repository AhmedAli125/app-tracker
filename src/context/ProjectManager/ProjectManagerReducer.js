import {
    PROJECT_CREATE,
    PROJECT_CANCEL
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
        default:
            return state;
    }
};