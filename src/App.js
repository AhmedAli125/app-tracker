import React from 'react'
import {Switch, Route} from 'react-router-dom'
import AuthStates from './context/auth/AuthStates';
// import AdminStates from './context/admin/AdminStates'
import ManagerStates from './context/manager/ManagerStates'
import Auth from './components/auth/Auth';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './components/ui/dashboard/Dashboard';
import './App.css';
import Manager from './components/manager/Manager';


function App() {
  return (
    <AuthStates>
      <ManagerStates>
        <div className="App">
        <Switch>
          <Route path='/' exact component={Auth} />
          {/* <PrivateRoute path='/dashboard' exact 
          component={Dashboard}
          // render={() => <h1>private route</h1>} 
          /> */}

          <Route path='/dashboard' exact component={Dashboard}/>

          {/* <Admin /> */}
          {/* <Manager /> */}
          {/* <Dashboard /> */}
          </Switch>
        </div>
      </ManagerStates>
    </AuthStates>
  );
}

export default App;
