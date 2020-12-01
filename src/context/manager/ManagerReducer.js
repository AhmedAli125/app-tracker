import {
    CREATE_PROJECT,
    CANCEL_PROJECT,
    OPEN_MEMBER_MODAL,
    CLOSE_MEMBER_MODAL,
    OPEN_TASK_MODAL,
    CLOSE_TASK_MODAL,
    GET_ORGANIZATION_MEMBERS,
    SELECTED_MEMBERS,
    REMOVE_SELECTED_MEMBERS,
} from '../Type'

export default (state, action) => {
    switch(action.type) {
        case CREATE_PROJECT:
            return {
                ...state,
                projects: false,
                addProjectButton: false,
                // showCreateProject: true               
            };
        case CANCEL_PROJECT:
            return {
                ...state,
                projects: true,
                addProjectButton: true,
                // showCreateProject: false               
            };
        case OPEN_MEMBER_MODAL:
            return{
                ...state,
                showAddMemberModal :  true
            }
        case CLOSE_MEMBER_MODAL:
            return{
                ...state,
                showAddMemberModal: false,
                // selectedMembers: []
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
        case GET_ORGANIZATION_MEMBERS:
            return{
                ...state,
                organizationMembers: action.payload
            }
        case SELECTED_MEMBERS:
            return {
                ...state,
                selectedMembers: [...state.selectedMembers, action.payload]
            }
        case REMOVE_SELECTED_MEMBERS:
            return {
                ...state,
                selectedMembers: state.selectedMembers.filter(member =>  member.key !== action.payload)
            }
        default:    
            return state;
    }
};