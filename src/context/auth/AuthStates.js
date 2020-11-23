import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import Database from '../../config/Database';
import {
    LOGIN_SUCCESS,
    SET_USER_DATA
} from '../Type';

const AuthStates = props => {

    const initialState = {
        user: {},
        isLoggedIn: false
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const getUserData = async () => {
        let userData;
        Database.auth().onAuthStateChanged(await function (user) {
            if (user) {
                // key=user.uid
                Database.database().ref(`/registered-users/${user.uid}`).once('value')
                .then(
                    (data) => {
                        userData = {...data.val()};
                        console.log(userData);
                        dispatch({ type: SET_USER_DATA, payload: userData});     
                    }
                );
                
            } else {
                console.log(user.uid);
            }
        });
    };

    const userLogin = async (formData) => {
        await Database.auth().signInWithEmailAndPassword(formData.email, formData.password)
            .then(res => {
                // console.log(`user id => ${res.user.uid}`);
                getUserData();
            })
            .catch(err => {
                console.log(err.message);
            });
    };

    // console.log('initialState');
    // console.log(initialState);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                userLogin,
                getUserData
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthStates;
