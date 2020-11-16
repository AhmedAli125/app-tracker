import React from 'react'
// import Container from '@material-ui/core/Container';
import ManagerStates from './context/manager/ManagerStates'
import AdminStates from './context/admin/AdminStates'
import Header from './components/header/Header'
import Dashboard from './components/ui/dashboard/Dashboard';
import AdminDashboard from './components/admin/adminDashboard/AdminDashboard'
import FilterMember from './components/admin/member/filterMember/FilterMember';
import './App.css';
import AddOrganization from './components/admin/addOrganization/AddOrganization';


function App() {
  return (
    <AdminStates>
      <ManagerStates>
        <div className="App">
          <AdminDashboard>
            {/* <FilterMember /> */}
            <AddOrganization />
          </AdminDashboard>    
          {/* <Header /> */}
          {/* <Dashboard /> */}
        </div>
      </ManagerStates>
    </AdminStates>
  );
}

export default App;
