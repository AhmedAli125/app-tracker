import React from 'react';
import AddProject from '../../manager/addProject/AddProject';
import ProjectList from '../projects/ProjectList';

import './dashboard.css';

function Dashboard() {
    return (
        <div className='dashboard-container'>
            <AddProject addProject={true} />
            <h1>test</h1>
            <ProjectList projectList={false} />
        </div>
    );
}

export default Dashboard;
