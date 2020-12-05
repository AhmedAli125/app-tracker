import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Task from './task/Task.js';
import ManagerContext from '../../../context/manager/ManagerContext'
// import './projectList.css';

function TaskList() {
    const managerContext = useContext(ManagerContext);
    const {tasks} = managerContext;

    let taskKeys
    let tasksArray = []
    
    taskKeys = Object.keys(tasks);

    taskKeys.forEach(task=>{
        tasksArray.push(tasks[task])
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
                            <Task buttonClicked={()=>{console.log('task clicked')}} task={task} />
                        </Grid>
                    )
                })
            }
        </Grid>    
    );
}

export default TaskList;