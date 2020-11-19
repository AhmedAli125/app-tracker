import React, {useState} from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  makeStyles,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const handleFirstName = e => setFirstName(e.target.value);

  const [lastName, setLastName] = useState('');
  const handleLastName = e => setLastName(e.target.value);

  const [email, setEmail] = useState('');
  const handleEmail = e => setEmail(e.target.value);

  const [password, setPassword] = useState('');
  const handlePassword = e => setPassword(e.target.value);

  const [confirmPassword, setConfirmPassword] = useState('');
  const handleConfirmPassword = e => setConfirmPassword(e.target.value);

  const [softwareHouseKey, setSoftwareHouseKey] = useState('');
  const handleSoftwareHouseKey = e => setSoftwareHouseKey(e.target.value);

  const [designationKey, setDesignationKey] = useState('');
  const handleDesignationKey = e => setDesignationKey(e.target.value);


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Project Tracker
        </Typography>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h2" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={firstName}
                onChange={handleFirstName}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleLastName}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                value={email}
                onChange={handleEmail}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={handlePassword}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                autoComplete="off"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="designationKey"
                label="Designation Key"
                value={designationKey}
                onChange={handleDesignationKey}
                // type="password"
                id="designationKey"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="softwareHouseKey"
                label="Software House Key"
                value={softwareHouseKey}
                onChange={handleSoftwareHouseKey}
                // type="password"
                id="softwareHouseKey"
                autoComplete="off"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <div style={{display:'flex'}}>
              <span style={{flexGrow:1}}></span>
              <Link href="#" variant="body2" style={{marginRight: '1rem'}}>
                {"Sign In"}
              </Link>
            </div>
        </form>
      </div>
    </Container>
  );
}