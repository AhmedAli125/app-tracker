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
    SET_ASSIGNED_STATUS,
    SET_PROJECT_DEADLINE,
    CREATE_TASK,
    GENERATE_PROJECT_KEY,
    RESET_PROJECT_FLAG,
    DELETE_TASK
} from '../Type'

const ManagerStates = props => {
        
    const initialState = {
        showAddMemberModal : false,
        showTaskModal: false,
        organizationMembers: null,
        selectedMembers: null,
        projectDeadline: null,
        tasks: null,
        projectKey: null,
        createProjectFlag: false
    }

    const authContext = useContext(AuthContext)
    const {
        user,
        currentDate
    } = authContext;
    
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

    const generateProjectKey = () =>{
        let projectKey = Database.database().ref(`/organizations/${user.softwareHouseKey}/projects`).push().key;
        dispatch({type:GENERATE_PROJECT_KEY, payload:projectKey})
    }

    const createTask = (data) => {
        let taskKey = Database.database().ref(`/organizations/${user.softwareHouseKey}/projects/${state.projectKey}`).push().key;
        const {
            title,
            desc,
            developer,
            tester,
            developerDeadline,
            testerDeadline
        } = data

        let task = {
            title,
            desc,
            key: taskKey,
            members: {
                developer: {
                    deadline: developerDeadline,
                    firstName: developer.firstName,
                    lastName: developer.lastName,
                    key: developer.key
                },
                tester: {
                    deadline: testerDeadline,
                    firstName: tester.firstName,
                    lastName: tester.lastName,
                    key: tester.key
                }
            },
            taskStatus: {
                developerStatus: {
                    isComplete: false
                },
                testerStatus: {
                    isComplete: false,
                },
                issue: {
                    status: false,
                    comment: ['no issue']
                }
            }
        };

        let updatedState = {...state.tasks, [taskKey]: task}

        dispatch({type: CREATE_TASK, payload: updatedState})
    }

    const deleteTask = (key) =>{
        let newTasks = { ...state.tasks };
        // console.log(newTasks)
        delete newTasks[key]
        // console.log(newTasks)
        dispatch({type:DELETE_TASK, payload:newTasks})
    }

    const resetCreateProjectFlag = () => {
        dispatch({type:RESET_PROJECT_FLAG})        
    }

    const setProjectDeadline = (deadline) => {
        dispatch({type:SET_PROJECT_DEADLINE, payload:deadline})
    }

    const createProject = (title) => {

        let selectedMembers = state.selectedMembers;
        let members = {}
        selectedMembers.forEach(member => members = {...members, [member.key]: member})

        let project = {
            key: state.projectKey,
            title,
            createdOn: currentDate(),
            deadline: state.projectDeadline,
            members,
            tasks: state.tasks
        }

        Database.database().ref(`/organizations/${user.softwareHouseKey}/projects/${project.key}`).set(project)
            .then(res => {
                Database.database().ref(`/organizations/${user.softwareHouseKey}/projects/0`).remove()
                    .then(res => console.log('data deleted', res)) //need to clear the states for project
                    .catch(err=>console.log(err))
            })
            .catch(err=>console.log(err))
    }

    return (
        <ManagerContext.Provider
            value = {{
                showAddMemberModal: state.showAddMemberModal,
                showTaskModal: state.showTaskModal,
                organizationMembers: state.organizationMembers,
                selectedMembers: state.selectedMembers,
                tasks: state.tasks,
                createProjectFlag: state.createProjectFlag,
                projectDeadline: state.projectDeadline,
                openMemberModalHandler,
                closeMemberModalHandler,
                openTaskModalHandler,
                closeTaskModalHandler,
                getOrganizationMembers,
                handleAssignedMember,
                getSelectedmembers,
                clearSelectedMember,
                createTask,
                generateProjectKey,
                setProjectDeadline,
                createProject,
                resetCreateProjectFlag,
                deleteTask
            }}
        >
            {props.children}
        </ManagerContext.Provider>
    )
}

export default ManagerStates
