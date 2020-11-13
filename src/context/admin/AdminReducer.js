import {
    CLOSE_FILTER_MODAL
} from '../Type'

export default (state, action)=>{
    switch(action.type){
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