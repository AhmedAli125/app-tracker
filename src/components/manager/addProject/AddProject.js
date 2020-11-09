import React, {useState} from 'react'
import AddButton from '../../ui/button/addButton/AddButton'
import CreateProject from '../addProject/CreateProject'
import AddMembers from './AddMembers'
import './addProject.css'
import AddTask from './AddTask'

function AddProject({addProject}) {
    const [showCreateProject, setCreateProject] = useState(false);
    const handleCreate = () => setCreateProject(!showCreateProject);
    
    return (
        addProject && <div className='project-container'>
            {/* <AddButton showAddButton={!showCreateProject} createWindow={handleCreate}/> */}
            {showCreateProject ? <CreateProject /> :
                <AddButton showAddButton={!showCreateProject} createWindow={handleCreate} />
            } 
            {/* <CreateProject show={!createWindow}/> */}
            {/* <AddMembers showAddMember={false}/>
            <AddTask showAddTask={false} /> */}
        </div>
    )
}

export default AddProject
