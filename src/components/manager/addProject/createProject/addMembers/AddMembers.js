import React from 'react';
import Modal from '../../../../ui/modal/ModalWindow';
import Typography from '@material-ui/core/Typography';
import Member from './Member';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import './addMember.css';

function AddMembers({ showAddMember, reset }) {

    return (
        showAddMember && <Modal show={true} clicked={reset}>
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
                    <Button color='secondary' onClick={reset}>Cancel</Button>
                </ButtonGroup>
            </div>
        </Modal>
    );
}

export default AddMembers;