import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import UserContext from '../../../../context/user/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Button,
  Typography,
  CardContent,
} from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';

function Project({ project }) {

  const route = useRouteMatch();
  const path = route.path;

  const useStyles = makeStyles({
    root: {
      width: 290,
      // maxWidth: 350,
      height: 250
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    success: {
      color: '#006400'
    },
    progress: {
      color: '#ff9000 '
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    textMargin: {
      marginLeft: 10,
    },
    bold: {
      fontWeight: 600,
      marginTop: 15
    },
    dateClass: {
      marginTop: 15
    },
    textJustify: {
      textAlign: "justify",
      textTransform: 'none'
    },
    link: {
      textDecoration: 'none',
    }
  });

  const classes = useStyles();

  const userContext = useContext(UserContext);
  const {
    viewProject
  } = userContext;

  // console.log(project)

  return (
    // <div className='projects'>
    <Link className={classes.link} to={`${path}/${project.key}`}>
      <Button className={classes.textJustify} onClick={() => viewProject(project.key)}>
        <Card className={classes.root}>
          <CardContent>
            <div style={{ display: 'flex' }}>
              <div style={{ flexGrow: 1, maxWidth: '220px' }}>
                <Typography
                  variant="h6"
                  component="h2"
                  color='primary'
                >
                  {project.title}
                </Typography>
              </div>
              {
                project.isComplete ?
                  <CheckCircleOutlinedIcon

                    className={classes.success}
                  /> :
                  <CachedIcon
                    className={classes.progress}
                  />
              }
            </div>
            <Typography className={`${classes.textMargin} ${classes.bold}`} variant="body1" component="p">
              Created By: {
                `${project.createdBy.firstName} ${project.createdBy.lastName}`
              }
            </Typography>

            <Typography className={classes.textMargin} variant="body1" component="p">
              No of Tasks : {Object.keys(project.tasks).length}
            </Typography>

            <Typography className={classes.textMargin} variant="body1" component="p">
              Total Members : {Object.keys(project.members).length}
            </Typography>

            <Typography className={`${classes.dateClass} ${classes.textMargin}`} variant="subtitle2" component="p">
              Created On : {project.createdOn}
            </Typography>
            <Typography className={classes.textMargin} variant="subtitle2" component="p">
              Deadline : {project.deadline}
            </Typography>
          </CardContent>
        </Card>
      </Button>
    </Link>
    // </div>
  );
}

export default Project;
