import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthStates from './context/auth/AuthStates';
import Auth from './components/auth/Auth';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './components/ui/dashboard/Dashboard';
import './App.css';
import AdminStates from './context/admin/AdminStates';
import ManagerStates from './context/manager/ManagerStates';
import UserState from './context/user/UserState';
import AlertState from './context/alerts/AlertState'
import AlertComponent from './components/ui/alert/AlertComponent';


function App() {
  return (
    <AlertState>
    <AuthStates>
      <AdminStates>
        <ManagerStates>
          <UserState>
              <div className="App">
                <AlertComponent />
              <Switch>
                <PrivateRoute path='/dashboard' component={Dashboard} />
                {/* <Route path='/dashboard' component={Dashboard}/> */}
                <Route path='/' component={Auth} />
              </Switch>
            </div>
          </UserState>
        </ManagerStates>
      </AdminStates>
      </AuthStates>
    </AlertState>
  );
}

export default App;
