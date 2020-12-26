import { useContext, useReducer } from 'react';
import UserReducer from "./UserReducer";
import UserContext from './UserContext';
import AuthContext from '../auth/AuthContext';
import Database from '../../config/Database';
import {
    GET_PROJECTS,
    GET_CLICKED_PROJECT,
    OPEN_EDIT_MEMBER_MODAL,
    CLOSE_EDIT_MEMBER_MODAL,
    SET_PROJECT_PERCENTAGE,
    SET_TASK_STATUS
} from '../Type';

const UserState = props => {
    const authContext = useContext(AuthContext);

    const {
        user,
        objectToArray
    } = authContext;

    const initialState = {
        projects: {},
        project: null,
        showViewTaskModal: false,
        selectedTask: null,
        projectPercentage: null
    };

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getProjects = () => {
        // let projectsArray = []
        let projectsObj;

        Database.database().ref(`/organizations/${user.softwareHouseKey}/projects`).once('value')
            .then(res => {
                projectsObj = { ...res.val() };
                dispatch({ type: GET_PROJECTS, payload: projectsObj });
            })
            .catch(err => console.log(err));

    };

    const getUpdatedData = () => {
        let prevProjects = state.projects;
        Database.database().ref(`/organizations/${user.softwareHouseKey}/projects`).on('child_changed', res => {
            console.log(res.val());

            console.log(prevProjects);
        });
    };

    const viewProject = (key) => {
        let project = state.projects[key];
        dispatch({ type: GET_CLICKED_PROJECT, payload: project });
    };

    const openViewTaskModalHandler = (data) => {
        dispatch({ type: OPEN_EDIT_MEMBER_MODAL, payload: data });
    };

    const closeViewTaskModalHandler = () => {
        dispatch({ type: CLOSE_EDIT_MEMBER_MODAL });
    };

    const countTaskStatus = (arr) => {
        let count = 0;
        arr.forEach(task => {
            if (task.taskStatus.developerStatus.isComplete) {
                count = count + 0.5;
            }
            if (task.taskStatus.testerStatus.isComplete) {
                count = count + 0.5;
            }
        });

        return count;
    };

    const calculatePercentage = () => {
        let tasksArray = objectToArray(state.project.tasks);
        let taskCompletedCount = countTaskStatus(tasksArray);
        let totalTasks = tasksArray.length;
        let percentage = Math.round((taskCompletedCount / totalTasks) * 100);
        if (percentage === 100) {
            let prevState = { ...state.project };
            prevState = { ...prevState, isComplete: true };
            Database.database().ref(`/organizations/${user.softwareHouseKey}/projects/${prevState.key}`).set({ ...prevState })
                .then((res) => {
                    // console.log(res)
                })
                .catch(err => console.log(err));
        }
        dispatch({
            type: SET_PROJECT_PERCENTAGE,
            payload: percentage
        });
    };

    const changeTaskStatus = (devStatus = 'developerStatus', devBoolean = false, testStatus = 'testerStatus', testBoolean = false) => {
        // let userStatus = status;
        let newState = { ...state.selectedTask };
        let taskStatus = { ...newState.taskStatus };

        let devUserStatus = { ...taskStatus[devStatus] };
        let devIsComplete = { ...devUserStatus.isComplete };
        devIsComplete = devBoolean;
        devUserStatus = { ...devUserStatus, isComplete: devIsComplete };

        let testUserStatus = { ...taskStatus[testStatus] };
        let testIsComplete = { ...testUserStatus.isComplete };
        testIsComplete = testBoolean;
        testUserStatus = { ...testUserStatus, isComplete: testIsComplete };

        let issueStatus = { ...taskStatus.issue, status: false };

        taskStatus = {
            ...taskStatus,
            [devStatus]: devUserStatus,
            [testStatus]: testUserStatus,
            issue: issueStatus
        };
        newState = { ...newState, taskStatus };

        let project = { ...state.project };
        let tasks = { ...project.tasks };
        tasks = { ...tasks, [newState.key]: newState };
        project = { ...project, tasks };

        dispatch({ type: SET_TASK_STATUS, payload: project });

        return (
            project
        );
    };

    const setDeveloperStatus = () => {
        let project = changeTaskStatus('developerStatus', true, 'testerStatus', false);
        Database.database().ref(`/organizations/${user.softwareHouseKey}/projects/${project.key}`).set(project)
            .then(res => res)
            .catch(err => console.log(err));
    };

    const setTesterStatus = () => {
        let project = changeTaskStatus('developerStatus', true, 'testerStatus', true);
        Database.database().ref(`/organizations/${user.softwareHouseKey}/projects/${project.key}`).set(project)
            .then(res => res)
            .catch(err => console.log(err));
    };

    const reportBug = (bug) => {
        let project = changeTaskStatus('developerStatus', false, 'testerStatus', false);

        let newProject = { ...project };
        let tasks = { ...newProject.tasks };
        let selectedTask = { ...tasks[state.selectedTask.key] };
        let taskStatus = { ...selectedTask.taskStatus };
        let issue = { ...taskStatus.issue };
        let comment = [...issue.comment];
        comment.push(bug);
        issue = {
            ...issue,
            comment,
            status: true
        };
        taskStatus = { ...taskStatus, issue };
        selectedTask = { ...selectedTask, taskStatus };
        tasks = { ...tasks, [selectedTask.key]: selectedTask };
        newProject = {...newProject, tasks}

        dispatch({ type: SET_TASK_STATUS, payload: newProject });

        Database.database().ref(`/organizations/${user.softwareHouseKey}/projects/${project.key}/tasks/${selectedTask.key}`).set(selectedTask)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };

    return (
        <UserContext.Provider
            value={{
                projects: state.projects,
                project: state.project,
                showViewTaskModal: state.showViewTaskModal,
                selectedTask: state.selectedTask,
                projectPercentage: state.projectPercentage,
                getProjects,
                getUpdatedData,
                viewProject,
                openViewTaskModalHandler,
                closeViewTaskModalHandler,
                calculatePercentage,
                setDeveloperStatus,
                setTesterStatus,
                reportBug
            }}
        >
            {props.children}
        </UserContext.Provider>
    );

};


export default UserState;