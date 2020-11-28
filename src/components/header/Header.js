import React, {useContext} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AuthContext from '../../context/auth/AuthContext'
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

    const authContext = useContext(AuthContext);
    const{
        user,
        userLogOut
    } = authContext;

    return (
        <div className={classes.root}>
        <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h5" className={classes.title}>
            App Tracker
            </Typography>
            <Typography variant="subtitle2" className={classes.userProfile}>
            {`
                ${user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)} 
                ${user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}
            ` }
            </Typography>
            <Button color="inherit">Profile</Button>
            <Button 
                color="inherit"
                onClick={userLogOut}
            >
                Log Out
            </Button>
        </Toolbar>
        </AppBar>
    </div>
    );
}

export default Header
