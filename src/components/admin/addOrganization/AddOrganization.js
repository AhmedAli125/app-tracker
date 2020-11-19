import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Grid,
  ButtonGroup,
  Button
} from '@material-ui/core';

function AddOrganization() {
  const [organization, setOrganization] = useState('');
  const handleOrganization = e => setOrganization(e.target.value);

  const [orgEmail, setOrgEmail] = useState('');
  const handleOrgEmail = e => setOrgEmail(e.target.value);


  const [contact, setContact] = useState('');
  const handleContact = e => setContact(e.target.value);

  const [address, setAddress] = useState('');
  const handleAddress = e => setAddress(e.target.value);

  const [managerKey, setManagerKey] = useState('');
  const [developerKey, setDeveloperKey] = useState('');
  const [testerKey, setTesterKey] = useState('');

  const getKeys = () => {
    let organizationKey = "";
    // var organizationName = organization;
    let possible = organization;
    // console.log(possible)
    possible = organization.replace(/ /g, "");

    for (let i = 0; i < 5; i++) {
      organizationKey += possible.charAt(Math.floor(Math.random() * possible.length));
      // console.log(`in for ${possible.charAt(Math.floor(Math.random() * possible.length))}`);
    }

    // console.log(organizationKey);

    setManagerKey(`manager-${organizationKey}`);
    setDeveloperKey(`developer-${organizationKey}`);
    setTesterKey(`tester-${organizationKey}`);

    return organizationKey;
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
