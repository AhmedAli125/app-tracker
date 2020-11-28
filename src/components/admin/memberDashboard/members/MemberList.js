import React, {useContext} from 'react';
import AdminContext from '../../../../context/admin/AdminContext'
import Grid from '@material-ui/core/Grid';
import Member from './member/Member';


function MemberList() {

    const adminContext = useContext(AdminContext);
    const {
        members
    } = adminContext;

    console.log(members);

    return (
        <Grid
            style={{
                width: '100%'
            }}
            container
            justify='center'
            spacing='2'
        >
            {
                members.map(member =>{
                    return(
                    <Grid item sm-12 md-4 lg-3 xl-2 key={member.key}> 
                        <Member data={member}/>
                    </Grid>
                    )
                })
            }
            {/* <Grid item sm-12 md-4 lg-3 xl-2>
                <Member />
            </Grid>
            <Grid item sm-12 md-4 lg-3 xl-2>
                <Member />
            </Grid>
            <Grid item sm-12 md-4 lg-3 xl-2>
                <Member />
            </Grid>
            <Grid item sm-12 md-4 lg-3 xl-2>
                <Member />
            </Grid>
            <Grid item sm-12 md-4 lg-3 xl-2>
                <Member />
            </Grid>
            <Grid item sm-12 md-4 lg-3 xl-2>
                <Member />
            </Grid>
            <Grid item sm-12 md-4 lg-3 xl-2>
                <Member />
            </Grid>
            <Grid item sm-12 md-4 lg-3 xl-2>
                <Member />
            </Grid>
            <Grid item sm-12 md-4 lg-3 xl-2>
                <Member />
            </Grid>
            <Grid item sm-12 md-4 lg-3 xl-2>
                <Member />
            </Grid>
            <Grid item sm-12 md-4 lg-3 xl-2>
                <Member />
            </Grid>
            <Grid item sm-12 md-4 lg-3 xl-2>
                <Member />
            </Grid>
            <Grid item sm-12 md-4 lg-3 xl-2>
                <Member />
            </Grid> */}
        </Grid>

    );
}

export default MemberList;
