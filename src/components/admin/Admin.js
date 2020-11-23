import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminStates from '../../context/admin/AdminStates';
import AdminDashboard from './adminDashboard/AdminDashboard';
import AddOrganization from './addOrganization/AddOrganization';
import MemberDashboard from './memberDashboard/MemberDashboard';
import OrganizationsDashboard from './organizationsDashboard/OrganizationsDashboard';


function Admin() {
    return (
        <AdminStates>
            <AdminDashboard>
                <Switch>
                    <Route path='/register-organazition' exact component={AddOrganization} />
                    <Route path='/view-organazitions' exact component={OrganizationsDashboard} />
                    <Route path='/view-members' exact component={MemberDashboard} />
                </Switch>
            </AdminDashboard>
        </AdminStates>
    );
}

export default Admin;
