import React, { useContext } from 'react';
import Modal from '../../../../ui/modal/ModalWindow';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
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