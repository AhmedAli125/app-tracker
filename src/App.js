import React from 'react';
import AuthStates from './context/auth/AuthStates';
import AdminStates from './context/admin/AdminStates';
import ManagerStates from './context/manager/ManagerStates';
import UserState from './context/user/UserState';
import AlertState from './context/alerts/AlertState';
import AppTracker from './components/AppTracker'

// import { Switch, Route } from 'react-router-dom';
// import Auth from './components/auth/Auth';
// import PrivateRoute from './routes/PrivateRoute';
// import Dashboard from './components/ui/dashboard/Dashboard';

import './App.css';
// import AlertComponent from './components/ui/alert/AlertComponent';
// import AlertContext from './context/alerts/AlertContext';


function App() {

  // const alertContext = useContext(AlertContext);
  // const {
  //   alertMessage
  // } = alertContext;

  return (
    <AlertState>
      <AuthStates>
        <AdminStates>
          <ManagerStates>
            <UserState>
              <div className="App">
                <AppTracker />
              </div>
            </UserState>
          </ManagerStates>
        </AdminStates>
      </AuthStates>
    </AlertState>
  );
}

export default App;
