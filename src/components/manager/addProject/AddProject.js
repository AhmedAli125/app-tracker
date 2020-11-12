import React, {useState, useContext} from 'react'
import AddButton from '../../ui/button/addButton/AddButton'
import CreateProject from './createProject/CreateProject'
import ManagerContext from '../../../context/manager/ManagerContext'
import './addProject.css'

function AddProject() {

    const managerContext = useContext(ManagerContext)
    const {showAddButton, showCreateProject, projectCreate} = managerContext
  
    // console.log('btn '+managerContext)

    // const [showCreateProject, setCreateProject] = useState(false);
    // const handleCreate = () => {
    //     return {
    //         setCreateProject(!showCreateProject);

    //     }
    // }
    
    return (
        showAddButton ? 
            <div>
                <AddButton 
                clicked={projectCreate} 
                // showAddButton={!showCreateProject} 
            />
            </div> :
            <CreateProject />
    )
}

export default AddProject
