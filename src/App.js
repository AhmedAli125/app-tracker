import React from 'react'
import AdminStates from './context/admin/AdminStates'
import ManagerStates from './context/manager/ManagerStates'
import Admin from './components/admin/Admin';
import Header from './components/header/Header'
import Dashboard from './components/ui/dashboard/Dashboard';
import SignIn from './components/auth/signIn/SignIn';
import SignUp from './components/auth/signUp/SignUp';
import './App.css';


function App() {
  return (
    <AdminStates>
      <ManagerStates>
        <div className="App">
          {/* <SignIn /> */}
          {/* <SignUp /> */}
          <Admin />
          {/* <Header /> */}
          {/* <Dashboard /> */}
        </div>
      </ManagerStates>
    </AdminStates>
  );
}

export default App;
