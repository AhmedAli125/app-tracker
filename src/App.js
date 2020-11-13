import React from 'react'
// import Container from '@material-ui/core/Container';
import ManagerStates from './context/manager/ManagerStates'
import AdminStates from './context/admin/AdminStates'
import Header from './components/header/Header'
import Dashboard from './components/ui/dashboard/Dashboard';
import FilterMember from './components/admin/member/filterMember/FilterMember';
import './App.css';


function App() {
  return (
    <AdminStates>
    <ManagerStates>
    <div className="App">
      <Header />
      <Dashboard />
      {/* <FilterMember /> */}
    </div>
    </ManagerStates>
    </AdminStates>
  );
}

export default App;
