import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UpdateButton from '../../button/updateButton/UpdateButton';
import DeleteButton from '../../button/deleteButton/DeleteButton';
import './task.css'

function Task({buttonClicked, creating}) {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 350,
      height: 200
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
      marginTop: 12,
    },
    textJustify: {
      textAlign: "justify",
      textTransform: 'none'
    }
  });

  const classes = useStyles();

  return (
    <div className='task-container'>
      <Button className={classes.textJustify} onClick={buttonClicked}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h6" component="h2">
              Task Title
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              <Typography variant='subtitle2' component='p'>
                Assigned Developer : 
              </Typography>
              <Typography variant='subtitle2' component='p'>
                Assigned Tester : 
              </Typography>
            </Typography>
            <Typography variant="subtitle2" component="p">
              Developer's Deadline :
            </Typography>
            <Typography variant="subtitle2" component="p">
              Tester's Deadline :
            </Typography>
          </CardContent>
        </Card>
       </Button> 
        {creating && <div className='icon-buttons'>
              <UpdateButton clicked={()=>{alert('updatev BUtton')}}/>
              <DeleteButton clicked={()=>{alert('Delete Button')}}/>
        </div>
        }
      </div>
  );
}

export default Task;
