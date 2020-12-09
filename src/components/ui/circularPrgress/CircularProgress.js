import React from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const ProgressCircular = () => {
    const useStyles = makeStyles(() => ({
        container: {
            width: '160px',
            margin: 'auto',
            marginTop: '10%'
        }
    }));

     const classes = useStyles();

    return (
    <div className={classes.container}>
      <CircularProgress 
        thickness='1.5'
        size='10rem' 
        />
    </div>
  );

}

export default ProgressCircular;
