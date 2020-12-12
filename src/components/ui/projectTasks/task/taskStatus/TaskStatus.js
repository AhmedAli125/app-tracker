import React from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import BugReportIcon from '@material-ui/icons/BugReport';

const TaskStatus = ({ status }) => {
    
    const {
        developerStatus,
        testerStatus,
        issue
    } =  status

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            justifyContent: 'flex-end',
            flexWrap: 'wrap'
        },
        margin: {
            margin: '0 5px'
        }
    }));
     
    const classes = useStyles();
     
    return (
        <div className={ classes.root }>
            {
                developerStatus.isComplete &&
                 <CodeIcon
                    fontSize='small' 
                    className={classes.margin}
                    style={{
                    backgroundColor: '#ffc400',
                    borderRadius:'50%',
                    padding: '3px',
                    color:'white'
                    }}
                />
            }
            {

                issue.status &&
                < BugReportIcon
                    fontSize='small' 
                    className={classes.margin}
                    style={{
                    backgroundColor: '#f44336',
                    borderRadius:'50%',
                    padding: '3px',
                    color:'white'
                    }}
                />
            }
            { 
                testerStatus.isComplete &&
                <PlaylistAddCheckIcon 
                    fontSize='small' 
                    className={classes.margin}
                    style={{
                    backgroundColor: '#4caf50',
                    borderRadius:'50%',
                    padding: '3px',
                    color:'white'
                    }}
                />
            }
        </div>
    );
}

export default TaskStatus;