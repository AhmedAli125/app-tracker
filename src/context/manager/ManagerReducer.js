import {
    CREATE_PROJECT,
    CANCEL_PROJECT,
    OPEN_MEMBER_MODAL,
    CLOSE_MEMBER_MODAL,
    OPEN_TASK_MODAL,
    CLOSE_TASK_MODAL
} from '../Type'

export default (state, action) => {
    switch(action.type) {
        case CREATE_PROJECT:
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
        case OPEN_MEMBER_MODAL:
            return{
                ...state,
                showAddMemberModal :  true
            }
        case CLOSE_MEMBER_MODAL:
            return{
                    ...state,
                    showAddMemberModal: false
            }
        case OPEN_TASK_MODAL:
            return{
                ...state,
                showTaskModal: true
            }
        case CLOSE_TASK_MODAL:
            return{
                ...state,
                showTaskModal: false
            }
            
        default:
            return state;
    }
};