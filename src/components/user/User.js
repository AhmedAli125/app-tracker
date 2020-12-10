import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import Header from '../header/Header';
import TaskDashboard from '../ui/projects/project/TaskDashboard';
import ProjectList from '../ui/projects/ProjectList';
import './user.css'

function User() {
    const route = useRouteMatch();
    const path = route.path

    return (
        <>
            <Header />
            <div className='dashboard-container'>
                <Switch>
                    <Route path={ `${path}/:id` } component={ TaskDashboard } />
                    <Route path={path} component={ProjectList} />
                </Switch>
            </div>
        </>
    )
}

export default User
