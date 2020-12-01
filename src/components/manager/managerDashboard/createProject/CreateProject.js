import React, { useContext, useEffect } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AddMembers from './addMembers/AddMembers';
import AddTask from './createTasks/AddTask';
import TaskList from '../../../ui/projectTasks/TaskList';
import ManagerContext from '../../../../context/manager/ManagerContext';
import './createProject.css';

function CreateProject(props) {

    const managerContext = useContext(ManagerContext);
    const {
        cancelProjectHandler,
        openMemberModalHandler,
        openTaskModalHandler,
        showAddButton,
        // getOrganizationMembers,
        // organizationMembers
    } = managerContext;

    useEffect(() => {
        if (showAddButton) {
            props.history.push('/dashboard')
        }
        // getOrganizationMembers();
        // console.log(organizationMembers)
    }, [showAddButton, props.history])

    const cancelProject = () => {
        cancelProjectHandler();
        // console.log(props.history)
    }

    return (
        <Container>
            <Typography variant='h5' gutterBottom='true'>
                Create Project
            </Typography>
            <form
                noValidate
                autoComplete="off">
                <TextField
                    fullWidth={true}
                    id="project-title"
                    label="Project Title"
                    variant="outlined" />
            </form>
            <div
                style={{
                    marginTop: '10px',
                    display: 'flex'
                }}
            >
                <p
                    style={{
                        flexGrow: '1'
                    }}
                >
                </p>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={openMemberModalHandler}
                >
                    Add Member
                </Button>
                <span style={{ width: '10px' }}></span>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={openTaskModalHandler}
                >
                    Add Tasks
                </Button>
            </div>
            <AddMembers />
            <AddTask />

            <div className='task-list'>
                <TaskList />
            </div>
            <div
                style={{
                    marginTop: '10px',
                    display: 'flex'
                }}
            >
                <p
                    style={{
                        flexGrow: '1'
                    }}
                ></p>
                <Button variant='contained' color='primary'>Create</Button>
                <span style={{ width: '10px' }}></span>
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={cancelProject}
                >
                    Cancel
                </Button>
            </div>
        </Container>
    );
}

export default CreateProject;