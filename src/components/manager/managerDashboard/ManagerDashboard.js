import React, { useContext } from 'react';
import ManagerContext from '../../../context/manager/ManagerContext'
import { Link, useRouteMatch } from 'react-router-dom';
import AddButton from '../../ui/button/addButton/AddButton';
import ProjectList from '../../ui/projects/ProjectList';

function ManagerDashboard() {

    const managerContext = useContext(ManagerContext)
    const {
        generateProjectKey
    } = managerContext

    const route = useRouteMatch();
    const path = route.path;

    return (
        <>
            <ProjectList />
            <Link to={`${path}/create-project`}>
                <AddButton 
                    clicked={generateProjectKey} 
                />
            </Link >
        </>
    );
}

export default ManagerDashboard;
