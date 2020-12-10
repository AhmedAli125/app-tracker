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


function App() {
  return (
    <AuthStates>
      <AdminStates>
        <ManagerStates>
          <UserState>
            <div className="App">
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
  );
}

export default App;
