import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import Database from '../../config/Database';
import {
    SET_USER_DATA,
    USER_LOG_OUT,
    USER_SIGN_UP
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
        Database.auth().signOut().then(() => {
            // alert('logged out');
            dispatch({ type: USER_LOG_OUT });
        }).catch(function (error) {
            alert(error);
        });
    };

    const registerUser = async (user) => {
        // console.log(user);
        const {
            email,
            password
        } = user;
        Database.auth().createUserWithEmailAndPassword(email, password)
        .then((res)=>{
            let userID = res.user.uid
            setUserData(user, userID);
            getUserData();
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    const setUserData = (data, id) => {
        // console.log(data, id)
        let orgData, designation, userData;
        const {
            firstName,
            lastName,
            email,
            softwareHouseKey,
            designationKey
        } = data

        //use to get SH data ny SH key
        Database.database().ref(`/organizations/${softwareHouseKey}`).once('value')
        .then(data => {
            orgData = {...data.val()}
            designation = orgData.organizationKeys[designationKey].designation
            userData = {
                key: id,
                firstName: firstName,
                lastName: lastName,
                email: email,
                softwareHouseKey:softwareHouseKey,
                designationKey:designationKey,
                designation : designation 
            }
            
            Database.database().ref(`/registered-users/${userData.key}`).set(userData)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))

        })
    }

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isLoggedIn: state.isLoggedIn,
                userLogin,
                getUserData,
                userLogOut,
                registerUser
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthStates;
