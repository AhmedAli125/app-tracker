import React, { useEffect, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Task from './task/Task.js';
import ManagerContext from '../../../context/manager/ManagerContext'
import UserContext from '../../../context/user/UserContext'
import AuthContext from '../../../context/auth/AuthContext.js';

// import './projectList.css';

function TaskList() {

    const authContext = useContext(AuthContext);
    const {
        user
    } = authContext;

    const managerContext = useContext(ManagerContext);
    const {
        tasks,
        createProjectFlag,
        editProject
    } = managerContext;

    const userContext = useContext(UserContext);
    const {
        project,
        openViewTaskModalHandler,
    } = userContext;

    let projectTasks = {};
    if (createProjectFlag || editProject !== null) {
        projectTasks = { ...tasks };
    } else {
        projectTasks = { ...project.tasks };
    }

    let taskKeys
    let tasksArray = []
    taskKeys = Object.keys(projectTasks);
    
    taskKeys.forEach(task => {
        if (user.designation === 'Manager') {
            tasksArray.push(projectTasks[task])
        } else {
                if (projectTasks[task].members[user.designation.toLowerCase()].key === user.key) {
                    tasksArray.push(projectTasks[task])
                }
        }
    })

    const viewTask = (data) => {
        openViewTaskModalHandler(data)
    }

    return (
        <Grid
            style={{
                width: '100%'
            }}
            container
            justify='center'
            spacing='2'
        >
            {
                tasksArray.map(task => {
                    return (
                        <Grid item sm-12 md-4 lg-3 xl-2 key={task.key}>
                            <Task buttonClicked={()=>viewTask(task)} task={task} />
                        </Grid>
                    )
                })
            }
        </Grid>    
    );
}

export default TaskList;