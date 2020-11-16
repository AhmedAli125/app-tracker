import React from 'react';
import Grid from '@material-ui/core/Grid';
import Member from './member/Member';

function MemberList() {
    return (
        <Grid
            style={{
                width: '100%'
            }}
            container
            justify='center'
            spacing='2'
        >
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
            </Grid>
            <Grid item sm-12 md-4 lg-3 xl-2>
                <Member />
            </Grid>
            <Grid item sm-12 md-4 lg-3 xl-2>
                <Member />
            </Grid>
        </Grid>

    );
}

export default MemberList;
