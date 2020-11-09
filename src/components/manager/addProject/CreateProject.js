import React, { useState, useEffect } from 'react';
import AddMembers from './AddMembers';
import AddTask from './AddTask';
import './addProject.css';

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
        <div>
            <h1>Create Project</h1>
            <button onClick={toggleMember}>Add Member</button>
            <button onClick={toggleTasks}>Add Tasks</button>
            <AddMembers showAddMember={showMember} reset={() => resetToggle()} />
            <AddTask showAddTask={showTask} reset={() => resetToggle()} />
        </div>
    );
}

export default CreateProject;