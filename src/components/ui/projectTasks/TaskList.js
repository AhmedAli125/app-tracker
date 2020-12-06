import React, { useEffect, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Task from './task/Task.js';
import ManagerContext from '../../../context/manager/ManagerContext'
import UserContext from '../../../context/user/UserContext'
// import './projectList.css';

function TaskList() {
    let projectTasks = {};
    
    const managerContext = useContext(ManagerContext);
    const {
        tasks,
        createProjectFlag
    } = managerContext;

    const userContext = useContext(UserContext);
    const {
        project,
        openViewTaskModalHandler
    } = userContext;

        if (createProjectFlag) {
            projectTasks = {...tasks};
        } else {
            projectTasks = {...project.tasks};
        }

    let taskKeys
    let tasksArray = []
    
    taskKeys = Object.keys(projectTasks);
    taskKeys.forEach(task=>{
        tasksArray.push(projectTasks[task])
    })

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
                            <Task buttonClicked={openViewTaskModalHandler} task={task} />
                        </Grid>
                    )
                })
            }
        </Grid>    
    );
}

export default TaskList;