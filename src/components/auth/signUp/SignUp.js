import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/AuthContext'
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  makeStyles,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container
} from '@material-ui/core';
import '../auth.css';

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
  grid: {
    marginBottom: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(1, 0, 0),
  },
}));

export default function SignUp(props) {
  
  const authContext = useContext(AuthContext)
  
  const {
    registerUser,
    isLoggedIn,
    getUserData
  } = authContext;
  
  useEffect(() => {
    getUserData();
    if(isLoggedIn) {
      props.history.replace('/dashboard');
    }
    // console.log(user);
    
  },[isLoggedIn, props.history])

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



  const checkPassword = (password, confirmPassword) => {
    return password === confirmPassword ? true : false
  }

  const signUp = (e) =>{
    e.preventDefault();
    let isVerified = checkPassword(password, confirmPassword)
    if(isVerified){
        let userData = {
          firstName,
          lastName,
          email,
          password,
          softwareHouseKey,
          designationKey
        }
      registerUser(userData)

      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setSoftwareHouseKey('')
      setDesignationKey('')
    } else{
      alert('incorrect passwords');
    }
  }

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
        <form className={classes.form} noValidate method='post'>
          <Grid className={classes.grid} container spacing={2}>
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
                type='email'
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
            color="secondary"
            className={classes.submit}
            onClick={e=>signUp(e)}
          >
            Sign Up
            </Button>
          <Link className='link' to='/'>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </Link>
        </form>
      </div>
    </Container>
  );
}