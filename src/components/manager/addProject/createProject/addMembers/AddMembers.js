import React, {useContext} from 'react';
import Modal from '../../../../ui/modal/ModalWindow';
import Typography from '@material-ui/core/Typography';
import Member from './Member';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import ManagerContext from '../../../../../context/manager/ManagerContext'
import './addMember.css';

function AddMembers() {
    const managerContext = useContext(ManagerContext);
    const { showAddMemberModal, closeMemberModalHandler} = managerContext;
    return (
        showAddMemberModal &&
        <Modal show={true} clicked={closeMemberModalHandler}>
            <div>
                <Typography variant='h5' align='left' display='block' >
                    Add Members
                </Typography>
                <div className='member-container'>
                    <Member member='Dawood Shahid' designation='Manager' />
                    <Member member='Ahmed Ali' designation='Developer' />
                    <Member member='Talha Siddiqui' designation='Tester' />
                    <Member member='Shahroz Ahmed' designation='Developer' />
                </div>
                <ButtonGroup variant='contained' fullWidth={true}>
                    <Button color='primary'>Add</Button>
                    <Button color='secondary' onClick={closeMemberModalHandler}>Cancel</Button>
                </ButtonGroup>
            </div>
        </Modal>
    );
}

export default AddMembers;