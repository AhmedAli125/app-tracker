import React, { useContext } from 'react';
import Modal from '../../../modal/ModalWindow';
import AuthContext from '../../../../../context/auth/AuthContext';
import UserContext from '../../../../../context/user/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Button,
    TextField,
    Paper
} from '@material-ui/core';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';



function ViewTask() {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));

    const classes = useStyles();

    const authContext = useContext(AuthContext)
    const {
        user
    } = authContext

    const userContext = useContext(UserContext)
    const {
        closeViewTaskModalHandler,
        selectedTask
    } = userContext

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
                    // 'developer' !== 'tester' &&
                    user.designation !== 'tester' &&
                    <Typography variant='subtitle2'>
                        {
                            `${user.designation === 'manager' ?
                                'Developer' : 'Task'} Deadline: ${selectedTask.members.developer.deadline}`
                        }
                    </Typography>
                }
                {
                    // 'tester' !== 'developer' &&
                    user.designation !== 'developer' &&
                    <Typography variant='subtitle2'>
                        {
                            `${user.designation === 'manager' ?
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
                    user.designation === 'developer' &&
                    // 'developer' === 'developer' &&
                    <div className='developerClass'>
                        <div style={{ display: 'flex' }}>
                            <span style={{ flexGrow: 1 }}></span>
                            <div>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    size='small'
                                    startIcon={<CheckCircleIcon />}
                                    style={{ marginLeft: '10px' }}
                                >
                                    Coded
                                </Button>
                            </div>
                        </div>
                    </div>
                }
                {
                    user.designation === 'tester' &&
                    // 'tester === 'tester' &&
                    <div className='testerClass'>
                        <TextField
                            margin='normal'
                            multiline={true}
                            rows='3'
                            fullWidth={true}
                            // value={desc}
                            placeholder="Enter Bug Details"
                            // onChange={changeDesc}
                            id="outlined-basic"
                            label="Report Bug"
                            variant="outlined"
                            autoComplete='off'
                        />
                        <div style={{ display: 'flex' }}>
                            <span style={{ flexGrow: 1 }}></span>
                            <div>
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    size='small'
                                    startIcon={<ReportProblemIcon />}
                                >
                                    Report
                                </Button>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    size='small'
                                    startIcon={<CheckCircleIcon />}
                                    style={{ marginLeft: '10px' }}
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
                    >
                        Back
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

export default ViewTask;
