import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import DeleteProject from '../../../manager/managerDashboard/createProject/deleteProject';
import UserContext from '../../../../context/user/UserContext';
import AuthContext from '../../../../context/auth/AuthContext';
import ManagerContext from '../../../../context/manager/ManagerContext';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Typography,
  CardContent,
  CardActionArea,
  CardActions
} from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import UpdateButton from '../../button/updateButton/UpdateButton';
import DeleteButton from '../../button/deleteButton/DeleteButton';

function Project({ project }) {

  const route = useRouteMatch();
  const path = route.path;

  const useStyles = makeStyles({
    root: {
      width: 290,
      height: 250,
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
      color: 'black'
    },
    Buttons: {
      display: 'flex',
      width: 290,
      position: 'relative',
      marginLeft: '150px',
      marginTop: '-27px'
    }
  });

  const classes = useStyles();

  const userContext = useContext(UserContext);
  const {
    viewProject
  } = userContext;

  const authContext = useContext(AuthContext);
  const {
    user
  } = authContext;

  const managerContext = useContext(ManagerContext);
  const {
    setEditProject,
    deleteProject,
    showDeleteProjectModal,
    openDeleteProjectModalHandler
  } = managerContext;

  return (
    <>
      <Card className={classes.root}>
        <Link className={classes.link} to={`${path}/${project.key}`}>
          <CardActionArea onClick={() => viewProject(project.key)} >
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
              <Typography
                className={`${classes.textMargin} ${classes.bold}`}
                variant="body1"
                component="p"
              >
                Created By: {
                  `${project.createdBy.firstName} ${project.createdBy.lastName}`
                }
              </Typography>
              <Typography
                className={classes.textMargin}
                variant="body1"
                component="p"
              >
                No of Tasks : {Object.keys(project.tasks).length}
              </Typography>
              <Typography
                className={classes.textMargin}
                variant="body1"
                component="p"
              >
                Total Members :
                {Object.keys(project.members).length}
              </Typography>
              <Typography
                className={`${classes.dateClass} ${classes.textMargin}`}
                variant="subtitle2"
                component="p"
              >
                Created On : {project.createdOn}
              </Typography>
              <Typography
                className={classes.textMargin}
                variant="subtitle2"
                component="p"
              >
                Deadline : {project.deadline}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          {
            user.designation === 'Manager' ?
              <div className={classes.Buttons}>
                <Link to={`${path}/project`}>
                  <UpdateButton clicked={() => setEditProject(project)} />
                </Link>
                <div>
                  <DeleteButton clicked={() => openDeleteProjectModalHandler()} />
                </div>
              </div> :
              null
          }
        </CardActions>
      </Card>
      {
        showDeleteProjectModal &&
        <DeleteProject projectKey={project.key} projectTitle={project.title} />
      }
    </>
  );
}

export default Project;
