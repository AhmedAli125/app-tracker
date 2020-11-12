import React, { useReducer } from 'react'
import ManagerContext from './ManagerContext'
import ManagerReducer from './ManagerReducer'
// axios
//firebase
import {
    PROJECT_CREATE,
    CANCEL_PROJECT
} from '../Type'

const ManagerStates = props => {
        
    const initialState = {
        projects: true,
        addProjectButton: true,
        showCreateProject: false
    }
    
    const [state, dispatch] = useReducer(ManagerReducer, initialState)

    const projectCreate = () => {
        dispatch({ type: PROJECT_CREATE})
        // console.log('project Cancel')
    }

    const cancelProject = () => {
        dispatch({type: CANCEL_PROJECT});
    }

    return (
        <ManagerContext.Provider
            value = {{
                projects: state.projects,
                showAddButton: state.addProjectButton,
                showCreateProjectWindow: state.showCreateProject,
                projectCreate,
                cancelProject
            }}
        >
            {props.children}
        </ManagerContext.Provider>
    )
}

export default ManagerStates
