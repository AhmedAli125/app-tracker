import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import AddButton from '../../ui/button/addButton/AddButton';
import ProjectList from '../../ui/projects/ProjectList';

function ManagerDashboard() {

    const route = useRouteMatch();
    const path = route.path;

    return (
        <>
            <ProjectList />
            <Link to={`${path}/create-project`}>
                <AddButton />
            </Link >
        </>
    );
}

export default ManagerDashboard;
