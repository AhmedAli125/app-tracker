import React, { useContext, useEffect } from 'react';
import Modal from '../../../../ui/modal/ModalWindow';
import Typography from '@material-ui/core/Typography';
import Member from './Member';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import ManagerContext from '../../../../../context/manager/ManagerContext';
import './addMember.css';
import MemberList from './MemberList';

function AddMembers() {
    const managerContext = useContext(ManagerContext);
    const {
        closeMemberModalHandler,
        organizationMembers,
        clearSelectedMember,
        getSelectedmembers
    } = managerContext;

    useEffect(() => {

        console.log('mounting addMember')

        return ()=>console.log('unmounting => addMember')
    }, [organizationMembers]);
    
    // console.log('render - add member')
    
    return (
        <Modal show={true} clicked={closeMemberModalHandler}>
            <div>
                <Typography variant='h5' align='left' display='block' >
                    Add Members
                </Typography>
                <MemberList />
                <ButtonGroup variant='contained' fullWidth={true}>
                    <Button
                        color='primary'
                        onClick={getSelectedmembers}
                    >
                        Add
                    </Button>
                    <Button
                        color='default'
                        onClick={clearSelectedMember}
                    >
                        Clear
                    </Button>
                    <Button
                        color='secondary'
                        onClick={closeMemberModalHandler}
                    >
                        Cancel
                    </Button>
                </ButtonGroup>
            </div>
        </Modal>
    );
}

export default AddMembers;