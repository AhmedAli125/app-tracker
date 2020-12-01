import React from 'react';
import { Route, Switch, useRouteMatch} from 'react-router-dom';
import ManagerDashboard from './managerDashboard/ManagerDashboard'
import Header from '../header/Header';
import CreateProject from './managerDashboard/createProject/CreateProject';
import ManagerStates from '../../context/manager/ManagerStates';
import './manager.css';

function Manager() {

    const route = useRouteMatch();
    const path = route.path;

    return (
        <>
            <Header />
            <div className='dashboard-container'>
                <ManagerStates>
                    <Switch>
                        <Route path={`${path}`} exact component={ManagerDashboard} />
                        <Route path={`${path}/create-project`} component={CreateProject} />
                    </Switch>
                </ManagerStates>
            </div>
        </>
    );
}

export default Manager;
