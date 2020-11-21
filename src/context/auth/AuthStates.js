import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import Database from '../../config/Database';
import {
    LOGIN_SUCCESS
} from '../Type';

const AuthStates = props => {

    const initialState = {
        user: {},
        isLoggedIn: false
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const getUserData = (key) => {
        Database.database().ref(`/registered-users/${key}`).once('value', (data) => {
            // data.val();
            console.log(data.val());
            // return data.val();
                // let userData = JSON.stringify(data.val());
            // console.log('user Data => ' + userData);
            // return { userData };
        });
    }

    const userLogin = async (formData) => {
        Database.auth().signInWithEmailAndPassword(formData.email, formData.password)
            .then(res => {
                console.log(res.user.uid);
                // let data =
                getUserData(res.user.uid);
                // console.log(`data => ${data}`);
                // dispatch({ type: LOGIN_SUCCESS, payload: res.user.uid });
                // loadUser(res.user.uid);
            })  // return firebase user id (res.user.uid)
            .catch(err => {
                console.log(err.message);
                // dispatch({ type: LOGIN_FAIL, payload: err.message });
            }); // return error message (err.message)

        // let currentUser = Database.auth().currentUser();
        // console.log(currentUser);

    };

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                userLogin
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthStates;
