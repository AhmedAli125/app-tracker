import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import AddButton from '../../ui/button/addButton/AddButton';
import ManagerContext from '../../../context/manager/ManagerContext';
import ProjectList from '../../ui/projects/ProjectList';

function ManagerDashboard() {

    const managerContext = useContext(ManagerContext);
    const {
        showAddButton,
        createProjectHandler
    } = managerContext;

    const route = useRouteMatch();
    const path = route.path;

    return (
        <>
            <ProjectList />
            {
                showAddButton ?
                    <Link to={`${path}/create-project`}>
                        <AddButton clicked={createProjectHandler} />
                    </Link > :
                    null
            }
        </>
    );
}

export default ManagerDashboard;
