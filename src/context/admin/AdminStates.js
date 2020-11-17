import React, {useReducer} from 'react';
import AdminReducer from './AdminReducer'
import AdminContext from './AdminContext'
import {
    OPEN_FILTER_MODAL,
    CLOSE_FILTER_MODAL
} from '../Type'

const AdminStates = props => {
    const initialState = {
        filterModal : false
    }
    
    const [state, dispatch] = useReducer(AdminReducer, initialState);
    
    const openFilterModalHandler =  () => {
        dispatch({type: OPEN_FILTER_MODAL});
    }

    const closeFilterModalHandler =  () => {
        dispatch({type: CLOSE_FILTER_MODAL});
    }

    return (
        <AdminContext.Provider
            value={{
                filterModal: state.filterModal,
                openFilterModalHandler,
                closeFilterModalHandler
            }}
        >
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminStates
