import {
    OPEN_FILTER_MODAL,
    CLOSE_FILTER_MODAL,
    OPEN_EDIT_MEMBER_MODAL,
    CLOSE_EDIT_MEMBER_MODAL,
    OPEN_SOFTWARE_HOUSE_MODAL,
    CLOSE_SOFTWARE_HOUSE_MODAL
} from '../Type'

export default (state, action)=>{
    switch(action.type){
        case OPEN_FILTER_MODAL:
            return{
                ...state,
                showFilterMemberModal : true
            }
        case CLOSE_FILTER_MODAL:
            return{
                ...state,
                showFilterMemberModal : false
            }
        case OPEN_EDIT_MEMBER_MODAL:
            return{
                ...state,
                showEditMemberModal : true
            }
        case CLOSE_EDIT_MEMBER_MODAL:
            return{
                ...state,
                showEditMemberModal : false
            }
        case OPEN_SOFTWARE_HOUSE_MODAL:
            return{
                ...state,
                showSoftwareHouseModal : true
            }
        case CLOSE_SOFTWARE_HOUSE_MODAL:
            return{
                ...state,
                showSoftwareHouseModal : false
            }
        default:
            return{
                state
            }
    }
}