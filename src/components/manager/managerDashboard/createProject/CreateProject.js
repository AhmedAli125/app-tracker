import React, { useState, useContext, useEffect } from 'react';
import { Container, Typography, Button, TextField } from '@material-ui/core';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';
import AddMembers from './addMembers/AddMembers';
import AddTask from './createTasks/AddTask';
import TaskList from '../../../ui/projectTasks/TaskList';
import ManagerContext from '../../../../context/manager/ManagerContext';
import AuthContext from '../../../../context/auth/AuthContext';
import AlertContext from '../../../../context/alerts/AlertContext';
import './createProject.css';

function CreateProject(props) {

    const managerContext = useContext(ManagerContext);
    const {
        openMemberModalHandler,
        openTaskModalHandler,
        showTaskModal,
        showAddMemberModal,
        // getOrganizationMembers,
        selectedMembers,
        tasks,
        setProjectDeadline,
        createProject,
        projectDeadline,
        cancelProject
    } = managerContext;

    const authContext = useContext(AuthContext);
    const {
        currentDate
    } = authContext;

    const alertContext = useContext(AlertContext);
    const {
        setMessage
    } = alertContext;

    // useEffect(() => {
    //     getOrganizationMembers();
    // }, []);

    const [titleValid, setTitleValid] = useState(false);
    const [title, setTitle] = useState('');
    const changeTitle = e => {
        setTitle(e.target.value);
        setTitleValid(validate(/^[a-zA-Z_ \&\']{1,23}$/g, e.target.value))
    };

    const [deadline, setDeadline] = useState(currentDate());
    const changeDate = (e) => {
        setDeadline(e.target.value);
        setProjectDeadline(e.target.value);
        // console.log(deadline)
    };


    const cancelProjectButton = () => {
        setTitle('');
        cancelProject();
        props.history.push('/dashboard');
    };

    const createProjectButton = () => {
        if (title) {
            if (!window.navigator.onLine) {
                setMessage('create project error', 'error')
            }
            createProject(title);
            setTitle('');
            cancelProject();
            props.history.push('/dashboard');
        } else {
            setMessage('title', 'error')
        }
    };

    const validate = (pattern, field) => {
        let regex = new RegExp(pattern);
        if (regex.test(field)) {
            return true;
        } else {
            return false;
        }
    };

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
                    error={title !== '' & !titleValid}
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
                    // disabled={deadline < currentDate()}
                    error={deadline < currentDate()}
                    InputProps={{ inputProps: { min: currentDate() } }}
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
                    startIcon={<PersonAddIcon/>}
                    >
                    Add Member
                </Button>
                <span style={{ width: '10px' }}></span>
                <Button
                    variant='contained'
                    color='primary'
                    disabled={!(selectedMembers && projectDeadline)}
                    onClick={openTaskModalHandler}
                    startIcon={<PlaylistAddIcon/>}
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
                    onClick={createProjectButton}
                    startIcon={<CreateIcon/>}
                >
                    Create
                </Button>
                <span style={{ width: '10px' }}></span>
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={cancelProjectButton}
                    startIcon={<CloseIcon/>}
                >
                    Cancel
                </Button>
            </div>
        </Container>
    );
}

export default CreateProject;