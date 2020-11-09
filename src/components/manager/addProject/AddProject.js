import React, {useState} from 'react'
import AddButton from '../../ui/button/addButton/AddButton'
import CreateProject from './createProject/CreateProject'
import './addProject.css'

function AddProject({addProject}) {
    const [showCreateProject, setCreateProject] = useState(false);
    const handleCreate = () => setCreateProject(!showCreateProject);
    
    return (
        addProject && <div>
            {showCreateProject ? <CreateProject /> :
                <AddButton showAddButton={!showCreateProject} createWindow={handleCreate} />
            } 
        </div>
    )
}

export default AddProject
