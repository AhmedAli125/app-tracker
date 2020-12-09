import {
    GET_PROJECTS,
    GET_CLICKED_PROJECT,
    OPEN_EDIT_MEMBER_MODAL,
    CLOSE_EDIT_MEMBER_MODAL,
    SET_PROJECT_PERCENTAGE
} from '../Type'

export default (state, action) => {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload  //getting multiple projects from DB
            }
        case GET_CLICKED_PROJECT:
            return {
                ...state,
                project: action.payload   //getting single project from global state
            }
        case OPEN_EDIT_MEMBER_MODAL:
            return {
                ...state,
                showViewTaskModal: true,
                selectedTask: action.payload
            }
            case CLOSE_EDIT_MEMBER_MODAL:
            return {
                ...state,
                showViewTaskModal: false,
                selectedTask: null
            }
        case SET_PROJECT_PERCENTAGE:
            return {
                ...state,
                projectPercentage: action.payload
            }
        default:
            return state;
        
    }
}