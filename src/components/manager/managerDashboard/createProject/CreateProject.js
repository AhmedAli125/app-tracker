import React, { useState, useContext, useEffect } from 'react';
import { Container, Typography, Button, TextField } from '@material-ui/core';
import AddMembers from './addMembers/AddMembers';
import AddTask from './createTasks/AddTask';
import TaskList from '../../../ui/projectTasks/TaskList';
import ManagerContext from '../../../../context/manager/ManagerContext';
import AuthContext from '../../../../context/auth/AuthContext'
import './createProject.css';

function CreateProject(props) {
    
    const managerContext = useContext(ManagerContext);
    const {
        openMemberModalHandler,
        openTaskModalHandler,
        showTaskModal,
        showAddMemberModal,
        getOrganizationMembers,
        selectedMembers,
        tasks,
        setProjectDeadline,
        createProject,
        projectDeadline,
        cancelProject,
        
    } = managerContext;
    
    const authContext = useContext(AuthContext)
    const {currentDate} = authContext
    
    const [title,setTitle] = useState('')
    const changeTitle = e => setTitle(e.target.value)

    const [deadline, setDeadline] = useState(currentDate())
    const changeDate = (e) => {
        setDeadline(e.target.value)
        setProjectDeadline(e.target.value)
        // console.log(deadline)
    }


    useEffect(() => {    
        getOrganizationMembers();
    }, [])

    const cancelProjectButton = () => {
        setTitle('')
        cancelProject()
        props.history.push('/dashboard');
    }

    const createProjectButton = () => {
        createProject(title)
        setTitle('')
        cancelProject()
        props.history.push('/dashboard');
    }

    return (
        <Container>
            <Typography variant='h5' gutterBottom={true} >
                Create Project
            </Typography>
            <form
                noValidate
                autoComplete="off">
                <TextField
                    fullWidth={true}
                    // id="project-title"
                    label="Project Title"
                    value={title}
                    onChange={changeTitle}
                    variant="outlined" 
                />
            </form>
            <div
                style={{
                    marginTop: '20px',
                    display: 'flex',
                }}
            >
                <TextField
                        id="date"
                        margin='none'
                        size='small'
                        label="Project Deadline"
                        type="date"
                        variant='outlined'
                        onChange={changeDate}
                        defaultValue={deadline}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{inputProps: { min: currentDate() } }}
                />
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
                    disabled={!(selectedMembers && projectDeadline)}
                    onClick={openTaskModalHandler}
                >
                    Add Tasks
                </Button>
            </div>
            {
                showAddMemberModal &&
                <AddMembers />
            }
            {
                showTaskModal &&
                <AddTask />
            }

            <div className='task-list'>
                <Typography variant='h6'>
                    Task List
                </Typography>
                {
                    tasks && 
                    <TaskList />
                }
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
                >
                </p>
                <Button
                    variant='contained'
                    color='primary'
                    disabled={!(selectedMembers && tasks && projectDeadline)}
                    onClick = {createProjectButton}
                >
                    Create
                </Button>
                <span style={{ width: '10px' }}></span>
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={cancelProjectButton}
                >
                    Cancel
                </Button>
            </div>
        </Container>
    );
}

export default CreateProject;