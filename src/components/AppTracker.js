import React, {useContext, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom';
import AlertContext from '../context/alerts/AlertContext'
import Auth from './auth/Auth';
import PrivateRoute from '../routes/PrivateRoute';
import Dashboard from './ui/dashboard/Dashboard';
import AlertComponent from './ui/alert/AlertComponent';
import Modal from './ui/modal/ModalWindow'
import CircularProgress from './ui/circularPrgress/CircularProgress'
import Loader from './ui/loader/Loader';

function AppTracker() {

    const alertContext = useContext(AlertContext);
    const {
        alertMessage,
        loading
    } = alertContext;

    // useEffect(() => {
    //     if (!window.navigator.onLine) {
    //         console.log('offline')
    //     }
    // }, [window.navigator.onLine])

    // console.log('[app tracker] ', loading)

    return (
        <>
            {
                loading &&
                    <Loader />
                    // <CircularProgress />
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
