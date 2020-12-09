import { useContext, useReducer } from 'react'
import UserReducer from "./UserReducer";
import UserContext from './UserContext'
import AuthContext from '../auth/AuthContext'
import Database from '../../config/Database'
import {
    GET_PROJECTS,
    GET_CLICKED_PROJECT,
    OPEN_EDIT_MEMBER_MODAL,
    CLOSE_EDIT_MEMBER_MODAL,
    SET_PROJECT_PERCENTAGE
} from '../Type'

const UserState = props =>{
    const authContext = useContext(AuthContext)

    const {
        user,
        objectToArray
    } = authContext;

    const initialState = {
        projects: null,
        project: null,
        showViewTaskModal: false,
        selectedTask: null,
        projectPercentage: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getProjects = () => {
        let projectsArray = []
        let projectsObj;
        Database.database().ref(`/organizations/${user.softwareHouseKey}/projects`).once('value')
            .then(res => {
                projectsObj = { ...res.val() }
                Object.keys(projectsObj)
                    .forEach(key => {
                        projectsArray.push(projectsObj[key])
                    })        
                dispatch({type: GET_PROJECTS, payload: projectsArray})

            })
            .catch(err => console.log(err))
        // console.log(projectsObj);
    }

    const viewProject = (key) => {
        let project = {}
        state.projects.filter(value => {
            return value.key === key ?  project = {...value} : null
        })
        // console.log(project);
        dispatch({type: GET_CLICKED_PROJECT, payload: project})
    }

    const openViewTaskModalHandler = (data) => {
        dispatch({type: OPEN_EDIT_MEMBER_MODAL, payload: data})
    }
    
    const closeViewTaskModalHandler = () => {
        dispatch({type: CLOSE_EDIT_MEMBER_MODAL})
    }

    const countTaskStatus = (arr) =>{
        let count = 0;
        arr.forEach(task => {
            if (task.taskStatus.developerStatus.isComplete) {
                count = count + 0.5
            }
            if (task.taskStatus.testerStatus.isComplete) {
                count = count + 0.5;
            }
        })

        return count
    }

    const calculatePercentage = () => {
        let tasksArray = objectToArray(state.project.tasks)
        let taskCompletedCount = countTaskStatus(tasksArray)
        let totalTasks = tasksArray.length;
        // console.log(taskCompletedCount, totalTasks)
        let percentage = (taskCompletedCount / totalTasks) * 100;
        console.log(percentage)
        dispatch({
            type: SET_PROJECT_PERCENTAGE,
            payload: percentage
        })
    }

    

    return (
        <UserContext.Provider
            value={ {
                projects: state.projects,
                project: state.project,
                showViewTaskModal: state.showViewTaskModal,
                selectedTask: state.selectedTask,
                projectPercentage: state.projectPercentage,
                getProjects,
                viewProject,
                openViewTaskModalHandler,
                closeViewTaskModalHandler,
                calculatePercentage
            }}
        >
            {props.children}
        </UserContext.Provider>
    )

}


export default UserState;