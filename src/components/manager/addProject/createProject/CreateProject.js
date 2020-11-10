import React, { useState } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AddMembers from './addMembers/AddMembers';
import AddTask from './createTasks/AddTask';
import TaskList from '../../../ui/projectTasks/TaskList';
import './createProject.css'

function CreateProject() {
    const [showMember, setShowMember] = useState(false);
    const [showTask, setShowTask] = useState(false);

    const toggleMember = () => {
        setShowMember(true);
    };

    const toggleTasks = () => {
        setShowTask(true);
    }
    
    const resetToggle = () => {
        setShowMember(false);
        setShowTask(false);
    };

    return (
        <Container>            
            <Typography variant='h4' gutterBottom='true'>
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
                ></p>
                <Button variant='contained' color='primary' onClick={toggleMember}>Add Member</Button>
                <span style={{width:'10px'}}></span>
                <Button variant='contained' color='primary' onClick={toggleTasks}>Add Tasks</Button>
            </div>
            <AddMembers showAddMember={showMember} reset={() => resetToggle()} />
            <AddTask showAddTask={showTask} reset={() => resetToggle()} />

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
                <span style={{width:'10px'}}></span>
                <Button variant='contained' color='secondary'>Cancel</Button>
                </div>
        </Container>
    );
}

export default CreateProject;