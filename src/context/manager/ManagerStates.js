import React, { useReducer } from 'react'
import ManagerContext from './ManagerContext'
import ManagerReducer from './ManagerReducer'
// axios
//firebase
import {
    PROJECT_CREATE,
    CANCEL_PROJECT,
    OPEN_MEMBER_MODAL,
    CLOSE_MEMBER_MODAL,
    OPEN_TASK_MODAL,
    CLOSE_TASK_MODAL
} from '../Type'

const ManagerStates = props => {
        
    const initialState = {
        projects: true,
        addProjectButton: true,
        showCreateProject: false,
        showAddMemberModal : false,
        showTaskModal: false
    }
    
    const [state, dispatch] = useReducer(ManagerReducer, initialState)

    const createProjectHandler = () => {
        dispatch({ type: PROJECT_CREATE})
        // console.log('project Cancel')
    }

    const cancelProjectHandler = () => {
        dispatch({type: CANCEL_PROJECT});
    }

    const openMemberModalHandler = () => {
        dispatch({type: OPEN_MEMBER_MODAL});
    }

    const closeMemberModalHandler =  () => {
        dispatch({type:CLOSE_MEMBER_MODAL});
    }

    const openTaskModalHandler = () =>{
        dispatch({type:OPEN_TASK_MODAL});
    }

    const closeTaskModalHandler = () =>{
        dispatch({type:CLOSE_TASK_MODAL});
    }

    return (
        <ManagerContext.Provider
            value = {{
                projects: state.projects,
                showAddButton: state.addProjectButton,
                showCreateProject: state.showCreateProject,
                showAddMemberModal: state.showAddMemberModal,
                showTaskModal: state.showTaskModal,
                createProjectHandler,
                cancelProjectHandler,
                openMemberModalHandler,
                closeMemberModalHandler,
                openTaskModalHandler,
                closeTaskModalHandler
            }}
        >
            {props.children}
        </ManagerContext.Provider>
    )
}

export default ManagerStates
