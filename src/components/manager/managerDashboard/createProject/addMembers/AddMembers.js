import React, { useContext } from 'react';
import Modal from '../../../../ui/modal/ModalWindow';
import {
    Typography,
    ButtonGroup,
    Button
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import CloseIcon from '@material-ui/icons/Close';
import ManagerContext from '../../../../../context/manager/ManagerContext';
import './addMember.css';
import MemberList from './MemberList';

function AddMembers() {
    const managerContext = useContext(ManagerContext);
    const {
        closeMemberModalHandler,
        clearSelectedMember,
        getSelectedmembers,
        tasks
    } = managerContext;

    const addMembers = () => {
        getSelectedmembers();
    }

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
                        onClick={addMembers}
                        startIcon={<AddIcon/>}
                    >
                        Add
                    </Button>
                    <Button
                        color='default'
                        onClick={ clearSelectedMember }
                        disabled={
                            tasks !== null ?
                                (Object.keys(tasks).length == 0 ? false : true) :
                                false
                        }
                        startIcon={<ClearAllIcon/>}
                    >
                        Clear
                    </Button>
                    <Button
                        color='secondary'
                        onClick={closeMemberModalHandler}
                        startIcon={<CloseIcon/>}
                    >
                        Cancel
                    </Button>
                </ButtonGroup>
            </div>
        </Modal>
    );
}

export default AddMembers;