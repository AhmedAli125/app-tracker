import React, { useContext } from 'react';
import { Container, Typography } from '@material-ui/core';
import MemberList from './members/MemberList';
import FilterButton from '../../ui/button/filterButton/FilterButton';
import AdminContext from '../../../context/admin/AdminContext';
import FilterMember from './members/filterMember/FilterMember';
import EditMember from './members/member/editMember/EditMember';

function ViewMember() {

    const adminContext = useContext(AdminContext);
    const { showFilterMemberModal, showEditMemberModal, openFilterModalHandler } = adminContext;

    return (
        <Container
            maxWidth="lg"
            style={{
                marginTop: '10px',
                height: '80vh'
            }}
        >
            <div
                style={{
                    // border: '1px solid',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '40px'
                }}
            >
                <Typography variant='h5'
                    style={{
                        flexGrow: '1'
                    }}
                >
                    View Members
                    </Typography>
                <FilterButton clicked={openFilterModalHandler} />
            </div>
            <div
                style={{
                    // border: '1px solid',
                    height: '66vh',
                    overflow: 'auto',
                    paddingTop: '10px'
                }}
            >
                <MemberList />
            </div>
            {showFilterMemberModal &&
                <FilterMember />
            }
            {showEditMemberModal &&
                <EditMember />
            }
        </Container>
    );
}

export default ViewMember;
