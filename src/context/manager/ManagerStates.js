import React, { useContext, useReducer } from 'react'
import ManagerContext from './ManagerContext'
import ManagerReducer from './ManagerReducer'
import AuthContext from '../auth/AuthContext'
import Database from '../../config/Database'
// axios
//firebase
import {
    CREATE_PROJECT,
    CANCEL_PROJECT,
    OPEN_MEMBER_MODAL,
    CLOSE_MEMBER_MODAL,
    OPEN_TASK_MODAL,
    CLOSE_TASK_MODAL,
    GET_ORGANIZATION_MEMBERS,
    SELECTED_MEMBERS,
    REMOVE_SELECTED_MEMBERS,
} from '../Type'

const ManagerStates = props => {
        
    const initialState = {
        projects: true,
        addProjectButton: true,
        // showCreateProject: false,
        showAddMemberModal : false,
        showTaskModal: false,
        organizationMembers: null,
        selectedMembers: []
    }

    const authContext = useContext(AuthContext)
    const { user } = authContext;
    
    const [state, dispatch] = useReducer(ManagerReducer, initialState)

    const createProjectHandler = () => {
        dispatch({ type: CREATE_PROJECT})
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

    const getOrganizationMembers = () => {  
        let members = [];
        let users;
        Database.database().ref(`/registered-users`).once('value')
        .then(res=>{
            users = {...res.val()}
            for(let uid in users){
                if(users[uid].softwareHouseKey === user.softwareHouseKey){
                    if(users[uid].designation!=='admin' && users[uid].designation!=='manager'){
                        members.push(users[uid])
                    }
                }
            }
            dispatch({type:GET_ORGANIZATION_MEMBERS, payload:members})
        })
        .catch(err=>console.log(err))
    }

    const getSelectedmembers = (data) => {
        // console.log(selected)
        dispatch({type:SELECTED_MEMBERS, payload:data})
    }

    const removeSelectedMember = (data) => {
        dispatch({type:REMOVE_SELECTED_MEMBERS, payload:data})
    }

    return (
        <ManagerContext.Provider
            value = {{
                projects: state.projects,
                showAddButton: state.addProjectButton,
                // showCreateProject: state.showCreateProject,
                showAddMemberModal: state.showAddMemberModal,
                showTaskModal: state.showTaskModal,
                organizationMembers: state.organizationMembers,
                selectedMembers: state.selectedMembers,
                createProjectHandler,
                cancelProjectHandler,
                openMemberModalHandler,
                closeMemberModalHandler,
                openTaskModalHandler,
                closeTaskModalHandler,
                getOrganizationMembers,
                getSelectedmembers,
                removeSelectedMember
            }}
        >
            {props.children}
        </ManagerContext.Provider>
    )
}

export default ManagerStates
