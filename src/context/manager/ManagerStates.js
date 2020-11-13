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

    const projectCreate = () => {
        dispatch({ type: PROJECT_CREATE})
        // console.log('project Cancel')
    }

    const cancelProject = () => {
        dispatch({type: CANCEL_PROJECT});
    }

    const openMemberModal = () => {
        dispatch({type: OPEN_MEMBER_MODAL});
    }

    const closeMemberModal =  () => {
        dispatch({type:CLOSE_MEMBER_MODAL});
    }

    const openTaskModal = () =>{
        dispatch({type:OPEN_TASK_MODAL});
    }

    const closeTaskModal = () =>{
        dispatch({type:CLOSE_TASK_MODAL});
    }

    return (
        <ManagerContext.Provider
            value = {{
                projects: state.projects,
                showAddButton: state.addProjectButton,
                showCreateProjectWindow: state.showCreateProject,
                showAddMemberModal: state.showAddMemberModal,
                showTaskModal: state.showTaskModal,
                projectCreate,
                cancelProject,
                openMemberModal,
                closeMemberModal,
                openTaskModal,
                closeTaskModal
            }}
        >
            {props.children}
        </ManagerContext.Provider>
    )
}

export default ManagerStates
