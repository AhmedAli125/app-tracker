import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import './header.css'

function Header() {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1
        },
        title: {
            flexGrow: 1
        },
        userProfile: {
            marginRight: "5rem"
        }            
    }));
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h5" className={classes.title}>
            App Tracker
            </Typography>
            <Typography variant="subtitle2" className={classes.userProfile}>
            User Profile
            </Typography>
            <Button color="inherit">Profile</Button>
            <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>
    </div>
    );
}

export default Header
