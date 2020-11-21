import React from 'react'
import AdminStates from './context/admin/AdminStates'
import ManagerStates from './context/manager/ManagerStates'
import Admin from './components/admin/Admin';
import Header from './components/header/Header'
import Dashboard from './components/ui/dashboard/Dashboard';
import Auth from './components/auth/Auth';
import './App.css';


function App() {
  return (
    <AdminStates>
      <ManagerStates>
        <div className="App">
          <Auth />
          {/* <Admin /> */}
          {/* <Header /> */}
          {/* <Dashboard /> */}
        </div>
      </ManagerStates>
    </AdminStates>
  );
}

export default App;
