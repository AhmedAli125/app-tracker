import React, {useReducer} from 'react';
import AdminReducer from './AdminReducer'
import AdminContext from './AdminContext'
import {
    CLOSE_FILTER_MODAL
} from '../Type'

const AdminStates = props => {
    const initialState = {
        filterModal : false
    }
    
    const [state, dispatch] = useReducer(AdminReducer, initialState);
    
    const closeFilterModal =  () => {
        dispatch({type: CLOSE_FILTER_MODAL});
    }

    return (
        <AdminContext.Provider
            value={{
                filterModal : state.filterModal,
                closeFilterModal
            }}
        >
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminStates
