import React, {useContext, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom';
import AlertContext from '../context/alerts/AlertContext'
import ManagerContext from '../context/manager/ManagerContext'
import Auth from './auth/Auth';
import PrivateRoute from '../routes/PrivateRoute';
import Dashboard from './ui/dashboard/Dashboard';
import AlertComponent from './ui/alert/AlertComponent';
import DeleteProject from './manager/managerDashboard/createProject/deleteProject';
import Loader from './ui/loader/Loader';
import Modal from './ui/modal/ModalWindow'
import CircularProgress from './ui/circularPrgress/CircularProgress'

function AppTracker() {

    const alertContext = useContext(AlertContext);
    const {
        alertMessage,
        loading,
    } = alertContext;

    const managerContext = useContext(ManagerContext);
    const {
        
    } = managerContext;

    useEffect(() => {
        window.onbeforeunload = function () {
            if (!window.navigator.onLine) {
                //     if(event.type === 'beforeunload'){
                //         console.log('refresh event')
                return false;
                //         event.preventDefault()
                //     }
            }
        };
    })

    // console.log('[app tracker] ', loading)

    return (
        <>
            {
                loading &&
                    <Loader />
            }
            {
                alertMessage &&
                <AlertComponent />
            }
            <Switch>
                <PrivateRoute path='/dashboard' component={Dashboard} />
                <Route path='/' component={Auth} />
            </Switch>
        </>
    )
}

export default AppTracker
