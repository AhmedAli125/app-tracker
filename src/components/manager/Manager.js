import React from 'react';
import AddProject from './addProject/AddProject';
import ProjectList from '../ui/projects/ProjectList';
import Header from '../header/Header'
import './manager.css';

function Manager() {
    return (
        <>
        <Header />
        <div className='dashboard-container'>
            <AddProject />
            <ProjectList />
        </div>
        </>
    );
}

export default Manager;
