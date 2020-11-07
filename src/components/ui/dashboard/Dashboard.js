import React from 'react';
import AddMembers from '../../manager/addProject/AddMembers';
import AddProject from '../../manager/addProject/AddProject';
// import Modal from '../modal/ModalWindow';
import ProjectList from '../projects/ProjectList';

import './dashboard.css';

function Dashboard() {
    return (
        <div className='dashboard-container'>
            {/* <AddProject />
            <ProjectList /> */}
        <AddMembers />           
        </div>
    );
}

export default Dashboard;
