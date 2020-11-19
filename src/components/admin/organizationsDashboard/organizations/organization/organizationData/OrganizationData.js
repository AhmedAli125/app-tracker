import React, { useState, useContext } from 'react'
import AdminContext from '../../../../../../context/admin/AdminContext';
import { Typography, TextField, Button, ButtonGroup, FormControl, MenuItem, Select, Grid } from '@material-ui/core'
import Modal from '../../../../../ui/modal/ModalWindow';

function OrganizationData() {
    
    const adminContext = useContext(AdminContext);
    const { showSoftwareHouseModal, closeSoftwareHouseModalHandler } = adminContext;

    const [organization, setOrganization] = useState('Dummy Name');
    // const handleOrganization = (e) => setOrganization(e.target.value);

    const [email, setEmail] = useState('Dummy Email');
    // const handleEmail = (e) => setEmail(e.target.value);

    const [address, setAddress] = useState('dummy address');

    const [projectCount, setProjectCount] = useState(12);

    const [managerKey, setManagerKey] = useState('');
    const [developerKey, setDeveloperKey] = useState('');
    const [testerKey, setTesterKey] = useState('');

    return (
        showSoftwareHouseModal &&
        <Modal
            show={true}  // yahan true pass krny ke zarurat he kiya hy jb hard code he dy rhy hyn to?
            clicked={closeSoftwareHouseModalHandler}
        >
            <Typography variant='h6'>
                Organization Data
            </Typography>
            <form noValidate>
                <TextField
                    id="orgName"
                    label="Organization"
                    variant="outlined"
                    fullWidth={true}
                    margin='normal'
                    value={organization}
                    disabled
                    // onChange={handleOrganization}
                />
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    margin='normal'
                    fullWidth={true}
                    type='email'
                    autoComplete='off'
                    value={email}
                    disabled
                    // onChange={handleEmail}
                />
                <TextField
                    id="address"
                    label="Address"
                    variant="outlined"
                    margin='normal'
                    fullWidth={true}
                    // type='email'
                    autoComplete='off'
                    value={address}
                    disabled
                    // onChange={handleEmail}
                />
                <TextField
                    id="projects"
                    label="Total Projects"
                    variant="outlined"
                    margin='normal'
                    fullWidth={true}
                    // type='email'
                    autoComplete='off'
                    // value={email}
                    disabled
                    // onChange={handleEmail}
                />

                <Grid container justify='center' spacing={1}>
                    <Grid item sm='10'>
                        <TextField
                            id="managerKey"
                            label='Manager Key'
                            fullWidth={true}
                            disabled
                            value={managerKey}
                            margin='normal'
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item sm='10'>
                        <TextField
                            id="developerKey"
                            label='Developer Key'
                            fullWidth={true}
                            disabled
                            value={developerKey}
                            margin='normal'
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item sm='10'>
                        <TextField
                            id="testerKey"
                            label='Tester Key'
                            fullWidth={true}
                            disabled
                            value={testerKey}
                            margin='normal'
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
            </form>
        </Modal>
    )
}

export default OrganizationData
