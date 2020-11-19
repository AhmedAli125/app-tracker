import React from 'react'
// import Container from '@material-ui/core/Container';
import ManagerStates from './context/manager/ManagerStates'
import AdminStates from './context/admin/AdminStates'
import Header from './components/header/Header'
import Dashboard from './components/ui/dashboard/Dashboard';
import AdminDashboard from './components/admin/adminDashboard/AdminDashboard'
import FilterMember from './components/admin/memberDashboard/members/filterMember/FilterMember';
import AddOrganization from './components/admin/addOrganization/AddOrganization';
import MemberDashboard from './components/admin/memberDashboard/MemberDashboard';
import OrganizationsDashboard from './components/admin/organizationsDashboard/OrganizationsDashboard';
import SignIn from './components/auth/signIn/SignIn';
import SignUp from './components/auth/signUp/SignUp';
import './App.css';


function App() {
  return (
    <AdminStates>
      <ManagerStates>
        <div className="App">
          <SignIn />
          {/* <SignUp /> */}
          {/* <AdminDashboard> */}
            {/* <AddOrganization /> */}
            {/* <OrganizationsDashboard /> */}
            {/* <MemberDashboard /> */}
          {/* </AdminDashboard>     */}
          {/* <Header /> */}
          {/* <Dashboard /> */}
        </div>
      </ManagerStates>
    </AdminStates>
  );
}

export default App;
