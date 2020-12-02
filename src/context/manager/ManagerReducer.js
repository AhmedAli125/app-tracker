import {
    CREATE_PROJECT,
    CANCEL_PROJECT,
    OPEN_MEMBER_MODAL,
    CLOSE_MEMBER_MODAL,
    OPEN_TASK_MODAL,
    CLOSE_TASK_MODAL,
    GET_ORGANIZATION_MEMBERS,
    SELECTED_MEMBERS,
    CLEAR_SELECTED_MEMBERS,
    SET_ASSIGNED_STATUS
} from '../Type'

export default (state, action) => {
    switch(action.type) {
        case OPEN_MEMBER_MODAL:
            return{
                ...state,
                showAddMemberModal: true
                
            }
        case CLOSE_MEMBER_MODAL:
            return{
                ...state,
                showAddMemberModal: false,
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
                selectedMembers: action.payload
            }
        case CLEAR_SELECTED_MEMBERS:
            return {
                ...state,
                organizationMembers: action.payload,
                selectedMembers: null
            }
        case SET_ASSIGNED_STATUS:
            return {
                ...state,
                organizationMembers: action.payload
            }
        default:    
            return state;
    }
};