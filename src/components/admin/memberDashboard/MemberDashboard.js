import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import MemberList from './members/MemberList';
import FilterButton from '../../ui/button/filterButton/FilterButton';
import AdminContext from '../../../context/admin/AdminContext';
import FilterMember from './members/filterMember/FilterMember';

function ViewMember() {

    const adminContext = useContext(AdminContext);
    const { filterModal, openFilterModalHandler } = adminContext;

    return (
        <div
            style={{
                maxWidth: '1000px',
                margin: '0 auto',
                // border:'1px solid'
            }}
        >
            <div
                style={{
                    // border: '1px solid',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '20px'
                }}
            >
                <Typography variant='h5'
                    style={{
                        flexGrow: '1'
                    }}
                >
                    Members
                    </Typography>
                <FilterButton clicked={openFilterModalHandler} />
            </div>
            <div
                style={{
                    // border: '1px solid',
                    height: '70vh',
                    overflow: 'auto',
                    paddingTop: '20px'
                }}
            >
                <MemberList />
            </div>
            {filterModal &&
                <FilterMember />
            }
        </div>
    );
}

export default ViewMember;
