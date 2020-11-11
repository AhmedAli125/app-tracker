import React, { useReducer } from 'react'
import ProjectManagerContext from './ProjectManagerContext'
import ProjectManagerReducer from './ProjectManagerReducer'
// axios
//firebase
import {
    PROJECT_CREATE,
    PROJECT_CANCEL
} from '../Type'

const ProjectManagerStates = props => {
        
    const initialState = {
        projects: true,
        addProjectButton: true,
        showCreateProject: false
    }
    
    const [state, dispatch] = useReducer(ProjectManagerReducer, initialState)

    const projectCreate = () => {
        dispatch({ type: PROJECT_CREATE})
        // console.log('project Cancel')
    }

    return (
        <ProjectManagerContext.Provider
            value = {{
                projects: state.projects,
                showAddButton: state.addProjectButton,
                showCreateProjectWindow: state.showCreateProject,
                projectCreate
            }}
        >
            {props.children}
        </ProjectManagerContext.Provider>
    )
}

export default ProjectManagerStates
