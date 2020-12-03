import React, { useContext, useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Grid,
  ButtonGroup,
  Button
} from '@material-ui/core';
import AdminContext from '../../../context/admin/AdminContext';
import AuthContext from '../../../context/auth/AuthContext';
import Database from '../../../config/Database';

function AddOrganization() {
  const adminContext = useContext(AdminContext);
  const {
    registerOrganization
  } = adminContext;

  const authContext = useContext(AuthContext);
  const {
    currentDate
  } = authContext;

  const [organization, setOrganization] = useState('');
  const handleOrganization = e => setOrganization(e.target.value);

  const [orgEmail, setOrgEmail] = useState('');
  const handleOrgEmail = e => setOrgEmail(e.target.value);


  const [contact, setContact] = useState('');
  const handleContact = e => setContact(e.target.value);

  const [address, setAddress] = useState('');
  const handleAddress = e => setAddress(e.target.value);

  const [organizationKey, setOrganizationKey] = useState('');
  const [managerKey, setManagerKey] = useState('');
  const [developerKey, setDeveloperKey] = useState('');
  const [testerKey, setTesterKey] = useState('');

  const getKeys = () => {

    let organizationKey = Database.database().ref('/organizations/').push().key;
    setOrganizationKey(organizationKey);

    let manager = generateKey(organizationKey);
    let developer = generateKey(organizationKey);
    let tester = generateKey(organizationKey);

    if ((manager !== developer) && (developer !== tester) && (manager !== tester)) {
      setManagerKey(manager);
      setDeveloperKey(developer);
      setTesterKey(tester);
      return 0;
    } else {
      getKeys();
    }
    // return organizationKey;
  };

  const generateKey = (key) => {
    key = key.replace(/-/g, '');
    key = key.replace(/_/g, '');
    let designationKey = '';
    let possible = key;

    for (let i = 0; i < 5; i++) {
      designationKey += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return designationKey;
  };

  let date = currentDate();

  const organizationData = {
    id: organizationKey,
    name: organization,
    address: address,
    contact: contact,
    email: orgEmail,
    regDate: date,
    projects: {
      0:0
    },
    organizationKeys: {
      [managerKey]: {
        designation: 'manager',
        key: managerKey
      },
      [developerKey]: {
        designation: 'developer',
        key: developerKey
      },
      [testerKey]: {
        designation: 'tester',
        key: testerKey
      },
    }
  };

  const register = () => {
    registerOrganization(organizationData)

    setOrganization('');
    setOrganizationKey('')
    setOrgEmail('')
    setContact('')
    setAddress('')
    setDeveloperKey('')
    setManagerKey('')
    setTesterKey('')
  };

  return (
    // <div>
    <Container
      maxWidth="md"
      style={{
        marginTop: '10px',
        height: '80vh'
      }}
    >
      <Typography variant='h5'>
        Add Organization
        </Typography>
      <form noValidate autoComplete='off'>

        <TextField
          id="organizationName"
          label='Oraganization Name'
          value={organization}
          fullWidth={true}
          margin='normal'
          variant="outlined"
          onChange={handleOrganization}
        />

        <TextField
          id="organizationEmail"
          label='Email Address'
          value={orgEmail}
          fullWidth={true}
          margin='normal'
          variant="outlined"
          onChange={handleOrgEmail}
        />

        <TextField
          id="contact"
          label='Contact No'
          fullWidth={true}
          value={contact}
          margin='normal'
          variant="outlined"
          onChange={handleContact}
        />

        <TextField
          id="address"
          label='Address'
          fullWidth={true}
          value={address}
          margin='normal'
          variant="outlined"
          onChange={handleAddress}
        />

        <Grid container justify='center' spacing={1}>
          <Grid item sm='12' md='3' lg='3'>
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
          <Grid item sm='12' md='3' lg='3'>
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
          <Grid item sm='12' md='3' lg='3'>
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
          <Grid item sm='12' md='12' lg='12' xl='12' xs='12' justify='center'
          >
            <Button
              variant='outlined'
              fullWidth={true}
              onClick={getKeys}
              style={{
                marginTop: '10px'
              }}
            >
              Get Keys
            </Button>
          </Grid>
        </Grid>

        <ButtonGroup
          variant='contained'
          fullWidth={true}
          style={{
            marginTop: '20px'
          }}
        >
          <Button
            color='primary'
            onClick={() => register()}
          >
            Register
          </Button>
          <Button
            color='secondary'
          >
            Cancel
          </Button>
        </ButtonGroup>
      </form>
    </Container>
    // </div> 
  );
}

export default AddOrganization;
