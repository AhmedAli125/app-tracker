import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/AuthContext';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AlertContext from '../../../context/alerts/AlertContext';
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

  const authContext = useContext(AuthContext);
  const {
    registerUser,
    isLoggedIn,
    getUserData,
    currentDate
  } = authContext;

  const alertContext = useContext(AlertContext);
  const {
    setMessage
  } = alertContext;

  useEffect(() => {
    getUserData();
    if (isLoggedIn) {
      props.history.replace('/dashboard');
    }
  }, [isLoggedIn, props.history]);

  const classes = useStyles();


  const [firstNameValid, setFirstNameValid] = useState(false);
  const [firstName, setFirstName] = useState('');
  const handleFirstName = e => {
    setFirstName(e.target.value);
    setFirstNameValid(validate(/[a-zA-Z]{2}/g, firstName));
  };

  const [lastName, setLastName] = useState('');
  const [lastNameValid, setLastNameValid] = useState(false);
  const handleLastName = e => {
    setLastName(e.target.value);
    setLastNameValid(validate(/[a-zA-Z]{2}/g, lastName));
  };

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const handleEmail = e => {
    setEmail(e.target.value);
    setEmailValid(validate(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/g, email));
  };

  const [password, setPassword] = useState('');
  const handlePassword = e => setPassword(e.target.value);

  const [passwordValidate, setPasswordValidate] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value);
    setPasswordValidate(confirmPassword.length < 5 && !checkPassword(password, confirmPassword));
  };

  const [softwareHouseKeyValidate, setSoftwareHouseKeyValidate] = useState(false);
  const [softwareHouseKey, setSoftwareHouseKey] = useState('');
  const handleSoftwareHouseKey = e => {
    setSoftwareHouseKey(e.target.value);
    setSoftwareHouseKeyValidate(validate(/[a-z0-9\-\_]{19}/gi, softwareHouseKey))
  };

  const [designationKeyValidate, setDesignationKeyValidate] = useState(false);
  const [designationKey, setDesignationKey] = useState('');
  const handleDesignationKey = e => {
    setDesignationKey(e.target.value);
    setDesignationKeyValidate(validate(/[a-z0-9]{4}/gi, designationKey));
  };

  const checkPassword = (password, confirmPassword) => {
    return password === confirmPassword ? true : false;
  };

  const validate = (pattern, field) => {
    let regex = new RegExp(pattern);

    if (regex.test(field)) {
      return true;
    } else {
      return false;
    }
  };

  const signUp = (e) => {
    e.preventDefault();
    let isPasswordValid = checkPassword(password, confirmPassword);

    if (firstNameValid && lastNameValid && emailValid && isPasswordValid && designationKeyValidate && softwareHouseKeyValidate) {
      let userData = {
        firstName,
        lastName,
        email,
        password,
        softwareHouseKey,
        designationKey,
        regDate: currentDate()
      };

      registerUser(userData);

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setSoftwareHouseKey('');
      setDesignationKey('');
    } else {
      setMessage('Please enter all fields', 'error');
    }
  };

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
                error={firstName !== '' & !firstNameValid}
                helperText={firstName !== '' & !firstNameValid ? 'must be atleast 3 chars' : ''}
                fullWidth
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
                error={lastName !== '' & !lastNameValid}
                helperText={lastName !== '' & !lastNameValid ? 'must be atleast 3 chars' : ''}
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
                autoComplete="off"
                error={email !== '' & !emailValid}
                helperText={email !== '' & !emailValid ? 'email pattern : username@domain.com' : ''}
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
                error={password.length > 0 && password.length <= 5}
                helperText={password.length > 0 && password.length <= 5 ? 'password must be atleast 6 characters long' : ''}
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
                error={passwordValidate}
                helperText={passwordValidate ? 'Password must be same' : ''}
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
                id="designationKey"
                error={designationKey !== ''  && !designationKeyValidate}
                helperText={designationKey !== '' && !designationKeyValidate ? 'must be atleast 5 chars' : ''}
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
                error={softwareHouseKey !== '' && !softwareHouseKeyValidate}
                helperText={softwareHouseKey !== '' && !softwareHouseKeyValidate ? 'must be atleast 20 chars' : ''}
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
            onClick={e => signUp(e)}
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