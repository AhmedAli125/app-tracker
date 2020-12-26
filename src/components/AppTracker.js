import React, {useContext} from 'react'
import { Switch, Route } from 'react-router-dom';
import AlertContext from '../context/alerts/AlertContext'
import Auth from './auth/Auth';
import PrivateRoute from '../routes/PrivateRoute';
import Dashboard from './ui/dashboard/Dashboard';
import AlertComponent from './ui/alert/AlertComponent';
import Modal from './ui/modal/ModalWindow'
import CircularProgress from './ui/circularPrgress/CircularProgress'

function AppTracker() {

    const alertContext = useContext(AlertContext);
    const {
        alertMessage,
        loading
    } = alertContext;

    return (
        <>
            {
                loading &&
                // <Modal  show={ true } clicked={ () =>{alert('progress')} } >
                    <CircularProgress />
                // </Modal>
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
