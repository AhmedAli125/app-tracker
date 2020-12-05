import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Button,
  Typography,
  CardContent
} from '@material-ui/core';

function Project({project}) {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 350
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
    },
    textJustify: {
      textAlign: "justify",
      textTransform: 'none'
    }
  });

  const classes = useStyles();

  return (
    // <div className='projects'>
    <Button className={classes.textJustify}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h6" component="h2">
            {project.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {project.description}
          </Typography>
          <Typography variant="body2" component="p">
            Created By: {
              `${project.createdBy.firstName} ${project.createdBy.lastName}`
            }
          </Typography>
          <Typography variant="body2" component="p">
            Created On : {project.createdOn}
          </Typography>
          <Typography variant="body2" component="p">
            Deadline : {project.deadline}
          </Typography>
        </CardContent>
      </Card>
    </Button>
    // </div>
  );
}

export default Project;
