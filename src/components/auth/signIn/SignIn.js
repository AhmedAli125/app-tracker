import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AuthContext from '../../../context/auth/AuthContext'
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 0),
  },
}));

function SignIn(props) {

  const authContext = useContext(AuthContext);

  const {
    isLoggedIn,
    userLogin,
    getUserData
  }= authContext;
  
  
  useEffect(() => {
    getUserData();
    if(isLoggedIn) {
      props.history.replace('/dashboard');
    }
    // console.log(user);
    
  },[isLoggedIn, props.history])
  
  // console.log(user)
  // console.log(isLoggedIn)

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const handleEmail = e => setEmail(e.target.value);
  
  const [password, setPassword] = useState('');
  const handlePassword = e => setPassword(e.target.value);

  const login = (e) => {
    e.preventDefault();

    let data = {
      email: email,
      password: password
    }

    userLogin(data);
    setEmail('');
    setPassword('');
    // console.log(`${email} => ${password}`)
  } 

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h4'>
          Project Tracker
        </Typography>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h2" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e) => login(e)} method='post'>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={handleEmail}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
            autoComplete="current-password"
          />
            <Button
              type="submit"
              // onSubmit
              fullWidth
              variant="contained"
              color="primary"
            className={classes.submit}
            >
              Sign In
            </Button>
          <Link className='link' to='/sign-up'>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
              Sign Up
          </Button>
          </Link>
        </form>
      </div>
    </Container>
  );
}

export default SignIn; 