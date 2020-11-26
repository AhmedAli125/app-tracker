import React, { useState, useContext } from 'react'
import AdminContext from '../../../../../../context/admin/AdminContext';
import { Typography, TextField, Grid } from '@material-ui/core'
import Modal from '../../../../../ui/modal/ModalWindow';

function OrganizationData() {
    
    const adminContext = useContext(AdminContext);
    const {
        showSoftwareHouseModal,
        closeSoftwareHouseModalHandler,
        currentOrganization
        // setCurrentOrganization
    } = adminContext;

    // const [organization, setOrganization] = useState(currentOrganization.name);
    // // const handleOrganization = (e) => setOrganization(e.target.value);

    // const [email, setEmail] = useState(currentOrganization.email);
    // // const handleEmail = (e) => setEmail(e.target.value);

    // const [address, setAddress] = useState(currentOrganization.email);

    // const [projectCount, setProjectCount] = useState(0);

    // const [managerKey, setManagerKey] = useState();
    // const [developerKey, setDeveloperKey] = useState('');
    // const [testerKey, setTesterKey] = useState('');
    const designation = currentOrganization.organizationKeys;
    let array = [];
    Object.keys(designation)
        .forEach((key) => {
            array.push(designation[key]);
        });
    // console.log(designation);
    // console.log(array);

    return (
        showSoftwareHouseModal &&
        <Modal
            show={true}  // yahan true pass krny ke zarurat he kiya hy jb hard code he dy rhy hyn to?
            clicked={closeSoftwareHouseModalHandler}
        >
            <Typography variant='h5'>
                Organization Data
            </Typography>
            <Typography variant='h6'>
                Name: {currentOrganization.name}
            </Typography>
            <Typography variant='h6'>
                Email: {currentOrganization.email}
            </Typography>
            <Typography variant='h6'>
                Address: {currentOrganization.address}
            </Typography>
            <Typography variant='h5'>
                Keys
            </Typography>
                {
                    array.map((data) => {
                        return <div>
                            <Typography variant='h6'>
                                {data.designation.charAt(0).toUpperCase() + data.designation.slice(1)}: {data.key}
                                </Typography>
                        </div>
                    })
                }
        </Modal>
    )
}

export default OrganizationData
