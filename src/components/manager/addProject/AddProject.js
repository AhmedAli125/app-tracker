import React from 'react'
import AddButton from '../../ui/button/addButton/AddButton'
import AddMembers from './AddMembers'
import './addProject.css'
import AddTask from './AddTask'

function AddProject({addProject}) {

    
    return (
        addProject && <div className='project-container'>
            <AddButton showAddButton={false}/>   {/* shows the add button for creating project */}
            <AddMembers showAddMember={false}/>           {/* shows the add members modal for adding members */}
            <AddTask showAddTask={true} />
        </div>
    )
}

export default AddProject
