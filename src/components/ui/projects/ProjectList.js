import React, {useContext, useEffect} from 'react';
import UserContext from '../../../context/user/UserContext'
import Grid from '@material-ui/core/Grid';
import Project from './project/Project';
import './projectList.css';

function ProjectList() {

    const userContext = useContext(UserContext);
    const {
        projects,
        getProjects
    } = userContext;

    useEffect(() => {
        getProjects()
    }, []);


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
                    projects ?
                        projects[0] !== 0 && projects.map(project => {
                        return (
                            <Grid key={ project.key } item sm-12 md-4 lg-3 xl-2>
                                <Project project={ project }/>
                            </Grid>
                        )
                    }) : null
                }
            </Grid>
        </div>
    );
}

export default ProjectList;