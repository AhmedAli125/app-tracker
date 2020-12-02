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
    CLEAR_SELECTED_MEMBERS,
    SET_ASSIGNED_STATUS
} from '../Type'

const ManagerStates = props => {
        
    const initialState = {
        showAddMemberModal : false,
        showTaskModal: false,
        organizationMembers: null,
        selectedMembers: null
    }

    const authContext = useContext(AuthContext)
    const { user } = authContext;
    
    const [state, dispatch] = useReducer(ManagerReducer, initialState)

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
        // console.log('getOrganizationMembers run')
        let members = [];
        let users;
        Database.database().ref(`/registered-users`).once('value')
        .then(res=>{
            users = {...res.val()}
            for(let uid in users){
                if(users[uid].softwareHouseKey === user.softwareHouseKey){
                    if(users[uid].designation!=='admin' && users[uid].designation!=='manager'){
                        members.push({
                            ...users[uid],
                            isAssigned: false
                        })
                    }
                }
            }
            dispatch({type:GET_ORGANIZATION_MEMBERS, payload:members})
        })
        .catch(err=>console.log(err))
    }

    const handleAssignedMember = (data) => {
        // console.log(`handleAssignedMember run`)
        let prevState = [...state.organizationMembers];
        let member; // index of member
        prevState.filter((user, index) => {
            // user.key === data.key  ? index : null
            return (user.key === data.key ? member = index : null)
        })

        prevState[member] = {   //index passed to array
            ...prevState[member],
            isAssigned: !prevState[member].isAssigned
        }

        dispatch({ type: SET_ASSIGNED_STATUS, payload: prevState})
    }

    const getSelectedmembers = () => {
        // console.log(selected)
        let selectedMembers = [];
        state.organizationMembers.map(member => {
            if (member.isAssigned) {
                selectedMembers.push(member);
            }
        });

        // console.log(selectedMembers)
        
        dispatch({type:SELECTED_MEMBERS, payload:selectedMembers})
    }

    const clearSelectedMember = () => {
        // console.log(`clearSelectedMember run`)
        let prevMembers = [...state.organizationMembers]
        let clearMembers = []
        prevMembers.forEach(member => {
            if (member.isAssigned) {
                return(
                    clearMembers.push({...member, isAssigned:false})
                )
            } else {
                return clearMembers.push(member)
            }
        })

        dispatch({ type: CLEAR_SELECTED_MEMBERS, payload:clearMembers})
    }

    return (
        <ManagerContext.Provider
            value = {{
                showAddMemberModal: state.showAddMemberModal,
                showTaskModal: state.showTaskModal,
                organizationMembers: state.organizationMembers,
                openMemberModalHandler,
                closeMemberModalHandler,
                openTaskModalHandler,
                closeTaskModalHandler,
                getOrganizationMembers,
                handleAssignedMember,
                getSelectedmembers,
                clearSelectedMember
            }}
        >
            {props.children}
        </ManagerContext.Provider>
    )
}

export default ManagerStates
