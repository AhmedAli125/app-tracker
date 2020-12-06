import {
    GET_PROJECTS,
    GET_CLICKED_PROJECT,
    OPEN_EDIT_MEMBER_MODAL,
    CLOSE_EDIT_MEMBER_MODAL
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
                showViewTaskModal: true
            }
        case CLOSE_EDIT_MEMBER_MODAL:
            return {
                ...state,
                showViewTaskModal: false
            }
        default:
            return state;
        
    }
}