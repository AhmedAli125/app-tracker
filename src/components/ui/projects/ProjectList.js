import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/AuthContext';
import UserContext from '../../../context/user/UserContext';
import Grid from '@material-ui/core/Grid';
import Project from './project/Project';
import CircularProgress from '../../ui/circularPrgress/CircularProgress';
import './projectList.css';

function ProjectList() {

    const userContext = useContext(UserContext);
    const {
        projects,
        getProjects,
        getUpdatedData,
    } = userContext;

    const authContext = useContext(AuthContext);
    const {
        user
    } = authContext;

    useEffect(() => {
        getProjects();
        getUpdatedData();
    }, [user]);

    let projectsArray=[]
    Object.keys(projects)
        .forEach(key => {
                // if (projects[0] !== 0){
            if (user.designation !== 'Manager') {
                    if (projects[key].members[user.key]) {
                        // console.log(projects[key].members[user.key])
                        projectsArray.push(projects[key])
                    }
            } else {
                projectsArray.push(projects[key])
            }
                // }
        })        


    return (
        <div>
            <Grid
                style={{
                    width: '100%'
                }}
                container
                justify='center'
                spacing='2'
            >
                {
                    projectsArray
                        // && projectsArray[0] != '0'
                        ?
                        projectsArray[0] !== 0 && projectsArray.map(project => {
                            return (
                                <Grid key={project.key} item sm-12 md-4 lg-3 xl-2>
                                    <Project project={project} />
                                </Grid>
                            );
                        }) : <CircularProgress />
                }
            </Grid>
        </div>
    );
}

export default ProjectList;