import React, {useReducer} from 'react';
import AdminReducer from './AdminReducer'
import AdminContext from './AdminContext'
import {
    OPEN_FILTER_MODAL,
    CLOSE_FILTER_MODAL,
    OPEN_EDIT_MEMBER_MODAL,
    CLOSE_EDIT_MEMBER_MODAL
} from '../Type'

const AdminStates = props => {
    const initialState = {
        showFilterMemberModal: false,
        showEditMemberModal: false
    }
    
    const [state, dispatch] = useReducer(AdminReducer, initialState);
    
    const openFilterModalHandler =  () => {
        dispatch({type: OPEN_FILTER_MODAL});
    }

    const closeFilterModalHandler =  () => {
        dispatch({type: CLOSE_FILTER_MODAL});
    }

    const openEditMemberModalHandler = () => {
        dispatch({type: OPEN_EDIT_MEMBER_MODAL});
    }

    const closeEditMemberModalHandler =  () => {
        dispatch({type: CLOSE_EDIT_MEMBER_MODAL});
    }

    return (
        <AdminContext.Provider
            value={{
                showFilterMemberModal: state.showFilterMemberModal,
                showEditMemberModal: state.showEditMemberModal,
                openFilterModalHandler,
                closeFilterModalHandler,
                openEditMemberModalHandler,
                closeEditMemberModalHandler
            }}
        >
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminStates
