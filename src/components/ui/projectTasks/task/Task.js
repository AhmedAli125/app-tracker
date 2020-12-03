import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ManagerContext from '../../../../context/manager/ManagerContext';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UpdateButton from '../../button/updateButton/UpdateButton';
import DeleteButton from '../../button/deleteButton/DeleteButton';
import './task.css'

function Task({buttonClicked, task}) {

  const managerContext = useContext(ManagerContext)
  const {
    createProjectFlag,
    deleteTask
  } = managerContext

  useEffect(() => {
    console.log('task')
  },[])

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 350,
      height: 190
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
      marginTop: 8,
    },
    sub:{
      marginBottom: 8,
    },
    textJustify: {
      textAlign: "justify",
      textTransform: 'none'
    }
  });

  const classes = useStyles();

  return (
    <div className='task-container'>
      {/* <Button className={classes.textJustify} onClick={buttonClicked}> */}
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h6" component="h2">
              {task.title}
            </Typography>

            <Typography
              className={classes.pos} 
              variant='subtitle2' 
              component='p'
            >
              Developer : {` ${task.members.developer.firstName} ${task.members.developer.lastName}`} 
            </Typography>

            <Typography 
              className={classes.sub}
              variant="subtitle2" 
              component="p"
              color="textSecondary"
            >
              Deadline :{` ${task.members.developer.deadline}`}
            </Typography>

              <Typography 
                variant='subtitle2' 
                component='p'
                className={classes.pos}
              >
                Tester : {` ${task.members.tester.firstName} ${task.members.tester.lastName}`}
              </Typography>
            
            <Typography 
              className={classes.sub}
              variant="subtitle2" 
              component="p"
              color="textSecondary"
            >
              Deadline :{` ${task.members.tester.deadline}`}
            </Typography>
            
          </CardContent>
        </Card>
       {/* </Button>  */}
      {
        createProjectFlag &&
        <div className='icon-buttons'>
          <UpdateButton clicked={ () => {
            console.log('click edit')
          } } />
          <DeleteButton clicked={ () => {
            deleteTask(task.key)
            console.log('click delete')
          } } />
        </div>
        }
      </div>
  );
}

export default Task;
