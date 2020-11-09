import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AddMembers from './addMembers/AddMembers';
import AddTask from './createTasks/AddTask';
// import './addProject.css'; ---------------------------------------add css file

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
            <form
                noValidate
                autoComplete="off">
                <TextField
                    fullWidth={true}
                    id="project-title"
                    label="Project Title"
                    variant="outlined" />
            </form>
            <button onClick={toggleMember}>Add Member</button>
            <button onClick={toggleTasks}>Add Tasks</button>
            <AddMembers showAddMember={showMember} reset={() => resetToggle()} />
            <AddTask showAddTask={showTask} reset={() => resetToggle()} />
        </Container>
    );
}

export default CreateProject;