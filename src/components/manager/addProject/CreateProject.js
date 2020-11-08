import React from 'react'
import AddMembers from './AddMembers'
import AddTask from './AddTask'
import './addProject.css'
function CreateProject() {
    return (
        <div>
            <h1>Create Project</h1>
            <AddMembers showAddMember={false}/>
            <AddTask showAddTask={true}/>
        </div>
    )
}

export default CreateProject