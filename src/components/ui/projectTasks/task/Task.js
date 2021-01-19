import React, { useContext } from 'react';
import TaskStatus from './taskStatus/TaskStatus'
import { makeStyles } from '@material-ui/core/styles';
import ManagerContext from '../../../../context/manager/ManagerContext';
import {
  Card,
  CardContent,
  Button,
  Typography
} from '@material-ui/core';
import UpdateButton from '../../button/updateButton/UpdateButton';
import DeleteButton from '../../button/deleteButton/DeleteButton';
import './task.css'

function Task({buttonClicked, task}) {

  const managerContext = useContext(ManagerContext)
  const {
    createProjectFlag,
    deleteTask,
    editTaskHandler,
    editProject
  } = managerContext

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
      <Button Button
        className={
          classes.textJustify
        }
        onClick={createProjectFlag || editProject !== null ? null : buttonClicked}
       >
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
            
            { (!createProjectFlag && !editProject) &&
              <TaskStatus status={ task.taskStatus }/>
            }
          </CardContent>
        </Card>
       </Button> 
      {
        createProjectFlag || editProject !== null &&
        <div className='icon-buttons'>
          <UpdateButton
            clicked={() => {
            editTaskHandler(task.key)
            }}
          />
          <DeleteButton clicked={ () => {
            deleteTask(task.key)
          } } />
        </div>
      }
      </div>
  );
}

export default Task;
