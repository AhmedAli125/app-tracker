import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import Database from '../../config/Database';
import {
    SET_USER_DATA,
    USER_LOG_OUT
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
                            userData = { ...data.val() };
                            // console.log(userData);
                            dispatch({ type: SET_USER_DATA, payload: userData });
                        }
                    )
                    .catch(
                        (error) => {
                            console.log(error);
                        }
                    );
            }
            // else {
            //     // console.log(user.uid);
            // }
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

    const userLogOut = async () => {
        Database.auth().signOut().then(function () {
            // alert('logged out');
            dispatch({ type: USER_LOG_OUT });
        }).catch(function (error) {
            alert(error);
        });
    };

    // console.log('initialState');
    // console.log(initialState);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isLoggedIn: state.isLoggedIn,
                userLogin,
                getUserData,
                userLogOut
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthStates;
