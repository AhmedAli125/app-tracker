import React, { useContext, useState } from 'react';
import Modal from '../../../modal/ModalWindow';
import AuthContext from '../../../../../context/auth/AuthContext';
import UserContext from '../../../../../context/user/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Button,
    TextField,
    Paper,
    Checkbox
} from '@material-ui/core';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function ViewTask() {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));

    const classes = useStyles();

    const [developerFlag, setDeveloperFlag] = useState(false)
    const developerFlagHandler = () => {
        setDeveloperFlag(!developerFlag)
        
    }

    const [testerFlag, setTesterFlag] = useState(false)
    const testerFlagHandler = () => {
        setTesterFlag(!testerFlag)
        // setTesterStatus();
    }

    const [report, setReport] = useState(null)
    const changeReportHandler = (e) => {
        setReport(e.target.value)
    }
    
    const authContext = useContext(AuthContext)
    const {
        user
    } = authContext

    const userContext = useContext(UserContext)
    const {
        closeViewTaskModalHandler,
        selectedTask,
        setDeveloperStatus,
        setTesterStatus,
        reportBug
    } = userContext

    const coded = () => {
        setDeveloperStatus()
        closeViewTaskModalHandler()
    }

    const tested = () => {
        setTesterStatus()
        closeViewTaskModalHandler()
    }

    const reportIssue = () => {
        reportBug(report)
        closeViewTaskModalHandler()
    }

    return (
        <Modal show={true} clicked={closeViewTaskModalHandler}>
            <div className={classes.root}>
                <Typography variant='h6' component='h2'>
                    {selectedTask.title}
                </Typography>
                <Typography variant='body1' component='p' align='justify'>
                    {selectedTask.desc}
                </Typography>
                {
                    user.designation !== 'Tester' &&
                    <Typography variant='subtitle2'>
                        {
                            `${user.designation === 'Manager' ?
                                'Developer' : 'Task'} Deadline: ${selectedTask.members.developer.deadline}`
                        }
                    </Typography>
                }
                {
                    user.designation !== 'Developer' &&
                    <Typography variant='subtitle2'>
                        {
                            `${user.designation === 'Manager' ?
                                'Tester' : 'Task'} Deadline: ${selectedTask.members.tester.deadline}`
                        }
                    </Typography>
                }
                <div
                    style={{
                        maxHeight: '31vh',
                        overflow: 'auto'
                    }}
                >
                    {
                        selectedTask.taskStatus.issue.comment.map(msg => {
                            return (
                                <Paper
                                    variant='outlined'
                                    style={{
                                        width: '90%',
                                        margin: '5px auto',
                                        backgroundColor: '#F5F5F5'
                                    }}>
                                    <p
                                        style={{
                                            width: '90%',
                                            margin: '0 auto',
                                            padding: '10px'
                                        }}
                                    >
                                        {msg}
                                    </p>
                                </Paper>        
                            )
                        })
                    }

                </div>
                {
                    user.designation === 'Developer' &&
                    // 'developer' === 'developer' &&
                    <div className='developerClass'>
                        <div style={{ display: 'flex' }}>
                            <div style={ { flexGrow: 1 } }>
                                <Checkbox
                                    value={ developerFlag }
                                    onChange={developerFlagHandler}
                                    color="primary"
                                    // inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    icon={
                                        <DeveloperModeIcon
                                            fontSize='small'
                                        />
                                    }
                                    checkedIcon={
                                        <DeveloperModeIcon
                                            color='primary'
                                            fontSize='small'
                                        />
                                    }
                                />
                            </div>
                            <div>
                                <Button
                                    disabled={!developerFlag}
                                    variant='contained'
                                    color='primary'
                                    size='small'
                                    startIcon={<CheckCircleIcon />}
                                    style={ { marginLeft: '10px', marginTop: '5px' } }
                                    onClick={coded}
                                >
                                    Coded
                                </Button>
                            </div>
                        </div>
                    </div>
                }
                {
                    user.designation === 'Tester' &&
                    // 'tester' === 'tester' &&
                    <div className='testerClass'>
                        <TextField
                            margin='normal'
                            value={ report }
                            onChange={changeReportHandler}
                            multiline={true}
                            rows='3'
                            fullWidth={true}
                            placeholder="Enter Bug Details"
                            id="outlined-basic"
                            label="Report Bug"
                            variant="outlined"
                            autoComplete='off'
                        />
                        <div style={{ display: 'flex' }}>
                            <div style={ { flexGrow: 1 } }>
                                <Checkbox
                                    value={ testerFlag }
                                    onChange={testerFlagHandler}
                                    color="primary"
                                    // inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    icon={
                                        <PlaylistAddCheckIcon
                                            fontSize='small'
                                        />
                                    }
                                    checkedIcon={
                                        <PlaylistAddCheckIcon
                                            color='primary'
                                            fontSize='small'
                                        />
                                    }
                                />
                            </div>
                            <div>
                                <Button
                                    disabled={!report}
                                    variant='contained'
                                    color='secondary'
                                    size='small'
                                    startIcon={ <ReportProblemIcon /> }
                                    onClick={reportIssue}
                                >
                                    Report
                                </Button>
                                <Button
                                    disabled={ !testerFlag }
                                    variant='contained'
                                    color='primary'
                                    size='small'
                                    startIcon={ <CheckCircleIcon /> }
                                    style={ { marginLeft: '10px' } }
                                    onClick={tested}
                                >
                                    Tested
                                </Button>
                            </div>
                        </div>
                    </div>
                }
                <div
                    style={{
                        width: '98%',
                        margin: '20px auto'
                    }}
                >
                    <Button
                        fullWidth={true}
                        variant='outlined'
                        color='primary'
                        onClick={closeViewTaskModalHandler}
                        startIcon={<ArrowBackIosIcon/>}
                    >
                        Back
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

export default ViewTask;
