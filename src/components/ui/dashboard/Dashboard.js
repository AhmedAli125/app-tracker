import React from 'react';
import AddProject from '../../manager/addProject/AddProject';
import ProjectList from '../projects/ProjectList';

import './dashboard.css';

function Dashboard() {
    return (
        <div className='dashboard-container'>
            <AddProject />
            <ProjectList />
        </div>
    );
}

export default Dashboard;
