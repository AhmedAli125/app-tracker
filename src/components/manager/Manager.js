import React from 'react';
import { Route, Switch, useRouteMatch} from 'react-router-dom';
import ManagerDashboard from './managerDashboard/ManagerDashboard'
import Header from '../header/Header';
import CreateProject from './managerDashboard/createProject/CreateProject';
import './manager.css';

function Manager() {

    const route = useRouteMatch();
    const path = route.path;

    return (
        <>
            <Header />
            <div className='dashboard-container'>
                <Switch>
                    <Route path={`${path}`} exact component={ManagerDashboard} />
                    <Route path={`${path}/create-project`} component={CreateProject} />
                </Switch>
            </div>
        </>
    );
}

export default Manager;
