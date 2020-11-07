import React from 'react';
import AddProject from '../../manager/addProject/AddProject';
// import Modal from '../modal/ModalWindow';
import ProjectList from '../projects/ProjectList';

import './dashboard.css';

function Dashboard() {
    return (
        <div className='dashboard-container'>
            <AddProject addProject={true} />
            <ProjectList projectList={false} />           
        </div>
    );
}

export default Dashboard;
