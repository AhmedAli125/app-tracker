import React, { useContext, useState } from 'react';
import { TextField, ButtonGroup, Button, Typography, } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import Modal from '../../../../../ui/modal/ModalWindow';
import AdminContext from '../../../../../../context/admin/AdminContext';

function EditMember() {

    const adminContext = useContext(AdminContext);
    const { closeEditMemberModalHandler } = adminContext;

    const [firstName, setFirstName] = useState('');
    const handleFirstName = (e) => setFirstName(e.target.value);

    const [lastName, setLastName] = useState('');
    const handleLastName = (e) => setLastName(e.target.value);

    const [organization, setOrganization] = useState('from database based on key');
    // const handleOrganization = (e) => setOrganization(e.target.value);

    const [email, setEmail] = useState('from database');
    // const handleEmail = (e) => setEmail(e.target.value);

    const [designation, setDesignation] = useState('');
    const handelDesignation = (e) => setDesignation(e.target.value);


    return (
        <Modal
            clicked={closeEditMemberModalHandler}
            show={true}
        >
            <Typography variant='h6'>
                Member Data
            </Typography>
            <form noValidate autoComplete="off">
                <TextField
                    id="firstName"
                    label="First Name"
                    variant="outlined"
                    fullWidth={true}
                    margin="normal"
                    value={firstName}
                    onChange={handleFirstName}
                />
                <TextField
                    id="lastName"
                    label="Last Name"
                    variant="outlined"
                    fullWidth={true}
                    margin="normal"
                    value={lastName}
                    onChange={handleLastName}
                />
                <TextField
                    id="email"
                    label="Email Address"
                    variant="outlined"
                    fullWidth={true}
                    margin="normal"
                    type='email'
                    value={email}
                    // onChange={handleEmail}
                    disabled
                />
                <TextField
                    id="designationKey"
                    label="Designation Key"
                    variant="outlined"
                    fullWidth={true}
                    margin="normal"
                    value={designation}
                    onChange={handelDesignation}
                />
                <TextField
                    id="organisation"
                    label="Organisation"
                    variant="outlined"
                    fullWidth={true}
                    margin="normal"
                    value={organization}
                    disabled
                    // onChange={handleOrganization}
                />
                {/* <TextField
                    id="gender"
                    label="Gender"
                    variant="outlined"
                    fullWidth={true}
                    margin="normal"
                    disabled
                /> */}
                {/* <TextField
                    id="noProject"
                    label="Number of Projects"
                    variant="outlined"
                    fullWidth={true}
                    margin="normal"
                    disabled
                /> */}
                <ButtonGroup
                    // size='large'
                    margin="normal"
                    variant="contained"
                    fullWidth={true}
                    style={{ marginTop: "20px" }}
                >
                    <Button
                        startIcon={
                            <SaveIcon />
                        }
                        color="primary"
                    >
                        Save
                    </Button>
                    <Button
                        startIcon={
                            <CloseIcon />
                        }
                        color="secondary"
                        onClick={closeEditMemberModalHandler}
                    >
                        Cancel
                    </Button>
                </ButtonGroup>
            </form>
        </Modal>
    );
}

export default EditMember;
