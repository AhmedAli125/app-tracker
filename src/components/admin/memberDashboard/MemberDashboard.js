import React from 'react';
import Fab from '@material-ui/core/Fab';
import FilterListIcon from '@material-ui/icons/FilterList';
import Typography from '@material-ui/core/Typography';
import MemberList from './members/MemberList'

function ViewMember() {
    return (
        <div
            style={{
                maxWidth:'1000px',
                margin: '0 auto',
                // border:'1px solid'
            }}
        >
            <div
                style={{
                    // border: '1px solid',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom:'20px'
                }}
            >
                <Typography variant='h5'
                    style={{
                        flexGrow: '1'
                    }}
                >
                    Members
                </Typography>
                <Fab color="default" aria-label="filter">
                    <FilterListIcon />
                </Fab>
            </div>
            <div
                style={{
                    // border: '1px solid',
                    height: '70vh',
                    overflow: 'auto',
                    paddingTop:'20px'
                }}
            >
                <MemberList />
            </div>
        </div>
    );
}

export default ViewMember;
