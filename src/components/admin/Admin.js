import React from 'react';
import { Route, Switch, useRouteMatch} from 'react-router-dom';
import AdminStates from '../../context/admin/AdminStates';
import AdminDashboard from './adminDashboard/AdminDashboard';
import AddOrganization from './addOrganization/AddOrganization';
import MemberDashboard from './memberDashboard/MemberDashboard';
import OrganizationsDashboard from './organizationsDashboard/OrganizationsDashboard';


function Admin() {

    const route = useRouteMatch();
    const path = route.path;

    return (
        <AdminStates>
            <AdminDashboard>
                <Switch>
                    <Route path={`${path}`} exact component={AddOrganization} />
                    <Route path={`${path}/view-organizations`} exact component={OrganizationsDashboard} />
                    <Route path={`${path}/view-members`} exact component={MemberDashboard} />
                    {/* <AddOrganization /> */}
                    {/* <Route path={`${path}/register-organization`} exact component={AddOrganization} />
                    <Route path={`${path}/view-organizations`} exact component={OrganizationsDashboard} />
                    <Route path={`${path}/view-members`} exact component={MemberDashboard} /> */}
                    {/* <Route path='/register-organization' exact component={AddOrganization} />
                    <Route path='/view-organizations' exact component={OrganizationsDashboard} /> */}
                </Switch>
            </AdminDashboard>
        </AdminStates>
    );
}

export default Admin;
