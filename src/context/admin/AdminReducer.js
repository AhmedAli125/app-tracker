import {
    OPEN_FILTER_MODAL,
    CLOSE_FILTER_MODAL
} from '../Type'

export default (state, action)=>{
    switch(action.type){
        case OPEN_FILTER_MODAL:
            return{
                ...state,
                filterModal : true
            }
        case CLOSE_FILTER_MODAL:
            return{
                ...state,
                filterModal : false
            }
        default:
            return{
                state
            }
    }
}