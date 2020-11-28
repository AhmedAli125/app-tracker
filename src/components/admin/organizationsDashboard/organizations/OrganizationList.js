import React, { useContext } from 'react';
import AdminContext from '../../../../context/admin/AdminContext';
import Grid from '@material-ui/core/Grid';
import Organization from './organization/Organization';

function OrganizationList() {

    const adminContext = useContext(AdminContext);
    const { organizations } = adminContext;

    // console.log(organizations);

    return (
        <Grid
            style={{
                width: '100%',
            }}
            container
            justify='center'
            spacing='1'
        >
            {
                organizations.map(data => {
                    return (
                        <Grid item key={data.id} sm-12 md-4 lg-3 xl-2>
                            <Organization data={ data }/>
                        </Grid>
                    );
                })
            }
        </Grid >

    );
}

export default OrganizationList;
