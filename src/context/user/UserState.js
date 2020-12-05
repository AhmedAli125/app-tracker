import { useContext, useReducer } from 'react'
import UserReducer from "./UserReducer";
import UserContext from './UserContext'
import AuthContext from '../auth/AuthContext'
import Database from '../../config/Database'
import {
    GET_PROJECTS
} from '../Type'

const UserState = props =>{
    const authContext = useContext(AuthContext)

    const {
        user
    } = authContext;

    const initialState = {
        projects: null
    }


    const [state, disptach] = useReducer(UserReducer, initialState);

    const getProjects = () => {
        let projectsArray = []
        let projectsObj;
        Database.database().ref(`/organizations/${user.softwareHouseKey}/projects`).once('value')
            .then(res => {
                projectsObj = { ...res.val() }
                Object.keys(projectsObj)
                    .forEach(key => {
                        projectsArray.push(projectsObj[key])
                    })        
                disptach({type: GET_PROJECTS, payload: projectsArray})

            })
            .catch(err => console.log(err))
        // console.log(projectsObj);
    }



    return (
        <UserContext.Provider
            value={ {
                projects: state.projects,
                getProjects
            }}
        >
            {props.children}
        </UserContext.Provider>
    )

}


export default UserState;