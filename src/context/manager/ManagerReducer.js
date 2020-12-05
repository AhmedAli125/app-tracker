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
    SET_ASSIGNED_STATUS,
    CREATE_TASK,
    GENERATE_PROJECT_KEY,
    SET_PROJECT_DEADLINE,
    DELETE_TASK,
    EDIT_TASK,
    GET_PROJECTS
} from '../Type'

export default (state, action) => {
    switch (action.type) {
        case CREATE_PROJECT:
            return {
                ...state,
                selectedMembers: null,
                projectDeadline: null,
                tasks: null,
                projectKey: null,
                createProjectFlag: false
            }
        case CANCEL_PROJECT:
            return {
                ...state,
                selectedMembers: null,
                projectDeadline: null,
                tasks: null,
                projectKey: null,
                createProjectFlag: false
            }
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
                showTaskModal: false,
                editTaskFlag: false
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
        case GENERATE_PROJECT_KEY:
            return{
                ...state,
                projectKey: action.payload,
                createProjectFlag: true
            }
        
        case CREATE_TASK:
            return {
                ...state,
                tasks: action.payload
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks:action.payload
            }
        case EDIT_TASK:
            return {
                ...state,
                editTaskFlag: true,
                showTaskModal: true,
                editTask: action.payload
            }
        case SET_PROJECT_DEADLINE:
            return{
                ...state,
                projectDeadline: action.payload
            }
        default:    
            return state;
    }
};