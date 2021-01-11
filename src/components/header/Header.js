import React, { useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    Typography,
    Button
} from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import Profile from '../ui/profile/Profile';
import AuthContext from '../../context/auth/AuthContext';
import Logo from '../../assets/logo-updated.png';
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
    const {
        user,
        userLogOut,
        profileFlag,
        showProfile
    } = authContext;

    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                // style={{
                //     display: 'flex',
                //     flexDirection:'column',
                //     // backgroundColor:'red'
                // }}
            >
                {/* <div
                    style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: 'white',
                        borderRadius: '100%',
                        // padding:'auto',
                    }}
                >
                    <img
                        src={Logo}
                        style={{
                            width: '50px',
                            height: '45px',
                            display:'inline-block',
                            // backgroundColor: 'gray',
                            backgroundImage: 'inherit'
                        }}
                    />
                </div> */}
                {/* <div> */}
                <Toolbar>
                    <div style={{display:'flex', flexGrow:'1'}}>
                        <div
                            style={{
                                width: '40px',
                                height: '40px',
                                // backgroundColor: '#bbdefb',
                                borderRadius: '100%',
                                // padding:'5px',
                            }}
                        >
                            <img
                                src={Logo}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'inline-block',
                                    // backgroundColor: 'gray',
                                    backgroundImage: 'inherit'
                                }}
                            />
                        </div>
                        <div style={{marginTop:'5px', marginLeft:'5px'}}>
                            {
                                user !== null ?
                                    <Typography variant="h5" className={classes.title}>
                                        {/* <img src={Logo} alt='Project Tracker Logo' width='100px' height='100px' /> */}
                                        {user.designation !== 'admin' ? user.organization : 'App Tracker'}
                                    </Typography> :
                                    null
                            }
                        </div>
                    </div>
                        {
                            user !== null ?
                                <Button
                                    color="inherit"
                                    onClick={
                                        showProfile
                                    }
                                startIcon={<PersonIcon/>}
                                >
                                    {`${user.firstName} ${user.lastName}`}
                                </Button> :
                                null
                        }
                        <Button
                            color="inherit"
                            onClick={userLogOut}
                            startIcon={<ExitToAppIcon/>}
                        >
                            Log Out
                    </Button>
                    </Toolbar>
                {/* </div> */}
            </AppBar>
            {profileFlag && <Profile />}
        </div>
    );
}

export default Header;
