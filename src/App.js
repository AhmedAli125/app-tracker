import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthStates from './context/auth/AuthStates';
import Auth from './components/auth/Auth';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './components/ui/dashboard/Dashboard';
import './App.css';


function App() {
  return (
    <AuthStates>
        <div className="App">
          <Switch>
            <PrivateRoute path='/dashboard' component={Dashboard} />
            {/* <Route path='/dashboard' component={Dashboard}/> */}

            <Route path='/' component={Auth} />
          </Switch>
        </div>
    </AuthStates>
  );
}

export default App;
