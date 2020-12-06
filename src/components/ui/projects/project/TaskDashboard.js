import React, { useContext } from 'react';
import ViewTask from '../../projectTasks/task/viewTask/ViewTask';
import UserContext from '../../../../context/user/UserContext';
import TaskList from '../../projectTasks/TaskList';
import {
    Typography,
    Container,
    Button
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function TaskDashboard(props) {
    const userContext = useContext(UserContext);
    const {
        project,
        showViewTaskModal,
        selectedTask
    } = userContext;

    return (
        <Container style={{ height: '85vh' }}>
            <div style={{ display: 'flex', marginTop: '10px' }}>
                <div style={{ flexGrow: 1 }}>
                    <Typography variant='h5' component='h2' color='primary'>
                        {project.title}
                    </Typography>
                </div>
                <div>
                    <Typography variant='h6' component='h2' color='secondary'>
                        25% Remaining
                    </Typography>
                </div>
            </div>
            <div style={{ height: '75vh' }}>
                <TaskList />
            </div>
            {
                showViewTaskModal &&
                <ViewTask />
            }

            <Button
                startIcon={<ArrowBackIosIcon style={{fontSize:'13px'}} />}
                variant='default'
                color='primary'
                // size='large'
                onClick={() => props.history.push(`/dashboard`)}
            >
                Back
            </Button>
        </Container>
    );
}

export default TaskDashboard;
